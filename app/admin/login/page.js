'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();
  const [form, setForm] = useState({ username: '', password: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  function handle(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setError('');
    const res = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });
    if (res.ok) {
      router.push('/admin');
    } else {
      const data = await res.json();
      setError(data.error);
      setLoading(false);
    }
  }

  return (
    <main className="login-main">
      <div className="login-card">
        <div className="login-logo">
          <svg viewBox="0 0 18 22" xmlns="http://www.w3.org/2000/svg" width="28" height="34">
            <path d="M9 1 Q14 7 12 14 Q14 18 9 21 Q4 18 6 14 Q4 7 9 1 Z" fill="#4A6741" />
            <path d="M9 3 L9 19" stroke="#3A2F26" strokeWidth="0.5" opacity="0.5" />
          </svg>
          <span className="login-logo-text">Harys.id</span>
        </div>

        <h1 className="login-title">Masuk ke <em>Admin</em></h1>
        <p className="login-sub">Panel pengelola blog portofolio</p>

        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label className="form-label">Username</label>
            <input
              className="form-input"
              name="username"
              type="text"
              value={form.username}
              onChange={handle}
              placeholder="username..."
              autoComplete="username"
              required
            />
          </div>
          <div className="form-group">
            <label className="form-label">Password</label>
            <input
              className="form-input"
              name="password"
              type="password"
              value={form.password}
              onChange={handle}
              placeholder="password..."
              autoComplete="current-password"
              required
            />
          </div>

          {error && <p className="login-error">{error}</p>}

          <button type="submit" disabled={loading} className="login-btn">
            {loading ? 'Memeriksa...' : 'Masuk'}
          </button>
        </form>
      </div>
    </main>
  );
}
