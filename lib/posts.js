import fs from 'fs';
import path from 'path';

const dataFile = path.join(process.cwd(), 'data', 'posts.json');

function ensureFile() {
  if (!fs.existsSync(dataFile)) fs.writeFileSync(dataFile, '[]');
}

export function getPosts() {
  ensureFile();
  return JSON.parse(fs.readFileSync(dataFile, 'utf8'));
}

export function getPost(slug) {
  return getPosts().find(p => p.slug === slug) || null;
}

function slugify(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export function createPost({ title, excerpt, content, category }) {
  const posts = getPosts();
  const post = {
    id: Date.now().toString(),
    title,
    slug: slugify(title),
    excerpt,
    content,
    category: category || '',
    date: new Date().toISOString().split('T')[0],
    createdAt: new Date().toISOString(),
  };
  posts.unshift(post);
  fs.writeFileSync(dataFile, JSON.stringify(posts, null, 2));
  return post;
}

export function updatePost(slug, { title, excerpt, content, category }) {
  const posts = getPosts();
  const idx = posts.findIndex(p => p.slug === slug);
  if (idx === -1) return null;
  posts[idx] = { ...posts[idx], title, excerpt, content, category: category || '', updatedAt: new Date().toISOString() };
  fs.writeFileSync(dataFile, JSON.stringify(posts, null, 2));
  return posts[idx];
}

export function deletePost(slug) {
  const posts = getPosts().filter(p => p.slug !== slug);
  fs.writeFileSync(dataFile, JSON.stringify(posts, null, 2));
}
