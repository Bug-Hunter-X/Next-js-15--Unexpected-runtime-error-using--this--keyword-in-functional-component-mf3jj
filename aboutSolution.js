```javascript
// pages/aboutSolution.js
import { useRouter } from 'next/router';

export default function About() {
  const router = useRouter();

  // Accessing router information instead of 'this'
  console.log(router.pathname);

  return (
    <div>
      <h1>About Page</h1>
      <p>Pathname: {router.pathname}</p>
    </div>
  );
}
```