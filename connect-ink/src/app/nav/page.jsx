export default function Nav (){
 
  return (
    <nav style={{ background: '#333', padding: '10px', color: '#fff' }}>
      <ul style={{ listStyle: 'none', display: 'flex', justifyContent: 'center', gap: '20px' }}>
        <li>
          <Link href="/about">
            <a style={{ color: '#fff', textDecoration: 'none' }}>About</a>
          </Link>
        </li>
        <li>
          <Link href="/explore">
            <a style={{ color: '#fff', textDecoration: 'none' }}>Explore</a>
          </Link>
        </li>
        <li>
          <Link href="/account">
            <a style={{ color: '#fff', textDecoration: 'none' }}>Account</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};