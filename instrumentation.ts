export const register = () => {
  if (process.env.NEXT_RUNTIME === 'nodejs') {
    process.stdout.write(
      `${JSON.stringify({
        event: 'runtime-version',
        node: process.version,
      })}\n`,
    );
  }
};
