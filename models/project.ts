import mongoose, { Schema, InferSchemaType } from "mongoose";
import slugify from 'slugify';

interface IProjectSchema {
  _id: mongoose.Types.ObjectId;
  title: string;
  description?: string;
  slug: string;
  completed: boolean;
  active: boolean;
}

const projectSchema: Schema<IProjectSchema> = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please provide a title'],
    minlength: [3, 'Title must be at least 3 characters'],
    unique: true,
  },
  description: {
    type: String,
    required: false,
  },
  slug: {
    type: String,
    unique: true,
  },
  completed: {
    type: Boolean,
    required: true,
    default: false,
  },
  active: {
    type: Boolean,
    required: true,
    default: true,
  },
}, { timestamps: true });

projectSchema.pre('save', async function () {
  if (this.slug == null && this.title != null) {
    this.slug = slugify(this.title, { lower: true, remove: /[^A-Za-z0-9\s]/g });
  }
});

type ProjectModelType = InferSchemaType<typeof projectSchema>;
const Project = mongoose.models.Project || mongoose.model("Project", projectSchema);

export default Project;
export type { ProjectModelType };