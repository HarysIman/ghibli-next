import { getPost } from '@/lib/posts';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Nav from '@/app/components/Nav';

export const dynamic = 'force-dynamic';

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return { title: `${post.title} — Harys Imanulloh`, description: post.excerpt };
}

function formatContent(text) {
  return text
    .split('\n\n')
    .map(p => `<p>${p.replace(/\n/g, '<br />')}</p>`)
    .join('');
}

export default async function BlogPost({ params }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <>
      <Nav links={[{ href: '/blog', label: '← Blog' }]} />

      <main className="post-main">
        <div className="post-container">
          <div className="post-meta">
            <span className="blog-card-date">{post.date}</span>
            {post.category && <span className="blog-card-cat">{post.category}</span>}
          </div>
          <h1 className="post-title">{post.title}</h1>
          <p className="post-excerpt">{post.excerpt}</p>
          <div className="post-divider"></div>
          <div
            className="post-content"
            dangerouslySetInnerHTML={{ __html: formatContent(post.content) }}
          />
          <div className="post-footer">
            <Link href="/blog" className="post-back">← Kembali ke Blog</Link>
          </div>
        </div>
      </main>
    </>
  );
}
