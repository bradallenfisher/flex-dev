import Link from 'next/link';
// import Button from './components/Button';

export default function Home() {
  return (
    <div
      style={{ display: 'flex', flexDirection: 'column', width: 'fit-content' }}
    >
      <h1>This is a page without the use client flag</h1>
      <Link href="/users">Link to users page</Link>
    </div>
  );
}
