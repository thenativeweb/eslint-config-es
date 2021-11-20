import { assertLint } from '../../shared/assertLint';
import { lintJsx } from '../../shared/esLintTester';

suite('react-hooks/', (): void => {
  test('rules-of-hooks.', async (): Promise<void> => {
    const result = await lintJsx(`
        const MyComponent = () => {
          if(true) {
            const [state, setState] = useState('');
          }
          return (<p>content</p>);
        };
    `);

    assertLint(result).containsError('react-hooks/rules-of-hooks');
  });

  test('exhaustive-deps.', async (): Promise<void> => {
    const result = await lintJsx(`
        const MyComponent = ({ dependency }) => {
          useEffect(() => {
            dependency.useIt();
          }, [])
          return (<p>content</p>);
        };
    `);

    assertLint(result).containsError('react-hooks/exhaustive-deps');
  });
});
