import type { Metadata } from 'next';
import dbConnect from '@/library/db';
import Article, { ArticleType } from '@/models/article';
import { Types } from 'mongoose';

export const metadata: Metadata = {
  title: 'Articles',
  description:
    'Articles and writing by Michael Johnson on software development, cybersecurity, and career transitions.',
};

export const dynamic = 'force-dynamic';

type ArticleDocument = ArticleType & { _id: Types.ObjectId; createdAt: Date };

async function getPublishedArticles(): Promise<ArticleDocument[]> {
  try {
    await dbConnect();
    const articles = await Article.find({ published: true })
      .sort({ createdAt: -1 })
      .select('title slug summary tags createdAt')
      .lean<ArticleDocument[]>();
    return articles;
  } catch {
    return [];
  }
}

export default async function Articles() {
  const articles = await getPublishedArticles();

  return (
    <div className="flex flex-col gap-8 max-w-4xl">
      <div>
        <h1 className="text-3xl font-bold mb-2">Articles</h1>
        <p className="text-gray-600 dark:text-gray-400">
          Writing on software development, cybersecurity, and the transition from military
          service to tech.
        </p>
      </div>

      {articles.length === 0 ? (
        <div className="bg-white dark:bg-gray-700 rounded-lg shadow p-10 flex items-center justify-center">
          <p className="text-gray-500 dark:text-gray-400 text-sm text-center">
            Technical articles and write-ups will be added here soon.
          </p>
        </div>
      ) : (
        <div className="flex flex-col gap-4">
          {articles.map((article) => (
            <article
              key={article._id.toString()}
              className="bg-white dark:bg-gray-700 rounded-lg shadow p-6 flex flex-col gap-2"
            >
              <div className="flex items-start justify-between gap-4">
                <h2 className="text-lg font-semibold">{article.title}</h2>
                <time
                  className="text-xs text-gray-400 dark:text-gray-500 shrink-0 mt-1"
                  dateTime={article.createdAt.toISOString()}
                >
                  {article.createdAt.toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric',
                  })}
                </time>
              </div>
              {article.summary && (
                <p className="text-sm text-gray-600 dark:text-gray-300">{article.summary}</p>
              )}
              {article.tags && article.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-1">
                  {article.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-gray-100 dark:bg-gray-600 text-gray-600 dark:text-gray-300 px-2 py-0.5 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
