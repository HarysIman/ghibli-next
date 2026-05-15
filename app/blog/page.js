import { getPosts } from '@/lib/posts';
import Link from 'next/link';
import Nav from '@/app/components/Nav';

export const dynamic = 'force-dynamic';

export const metadata = {
  title: 'Blog — Harys Imanulloh',
  description: 'Tulisan tentang SEO, brand digital, dan strategi pencarian.',
};

export default function BlogPage() {
  const posts = getPosts();

  return (
    <>
      <Nav links={[{ href: '/#profil', label: 'Profil' }, { href: '/#karya', label: 'Karya' }, { href: '/blog', label: 'Blog' }, { href: '/#kontak', label: 'Kontak' }]} />

      <main className="blog-main">
        <div className="container">
          <div className="section-head">
            <div className="section-num">Blog</div>
            <h1 className="section-title">Tulisan <em>saya</em> <span className="jp">文章</span></h1>
          </div>

          {posts.length === 0 ? (
            <div className="blog-empty">
              <p>Belum ada tulisan.</p>
            </div>
          ) : (
            <div className="blog-list">
              {posts.map(post => (
                <Link key={post.id} href={`/blog/${post.slug}`} className="blog-card">
                  <div className="blog-card-meta">
                    <span className="blog-card-date">{post.date}</span>
                    {post.category && <span className="blog-card-cat">{post.category}</span>}
                  </div>
                  <h2 className="blog-card-title">{post.title}</h2>
                  <p className="blog-card-excerpt">{post.excerpt}</p>
                  <span className="blog-card-read">Baca →</span>
                </Link>
              ))}
            </div>
          )}
        </div>
      </main>
    </>
  );
}
