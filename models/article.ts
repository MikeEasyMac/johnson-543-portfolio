import mongoose, { Schema, InferSchemaType } from 'mongoose';
import slugify from 'slugify';

const articleSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, 'Title is required'],
      trim: true,
      maxlength: [200, 'Title must be 200 characters or fewer'],
    },
    slug: {
      type: String,
      unique: true,
      trim: true,
    },
    summary: {
      type: String,
      required: [true, 'Summary is required'],
      trim: true,
      maxlength: [500, 'Summary must be 500 characters or fewer'],
    },
    content: {
      type: String,
      required: [true, 'Content is required'],
    },
    tags: {
      type: [String],
      default: [],
    },
    published: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  { timestamps: true }
);

articleSchema.pre('save', function () {
  if (!this.slug && this.title) {
    this.slug = slugify(this.title, { lower: true, strict: true });
  }
});

export type ArticleType = InferSchemaType<typeof articleSchema>;

const Article =
  mongoose.models.Article ||
  mongoose.model('Article', articleSchema, 'articles');

export default Article;
