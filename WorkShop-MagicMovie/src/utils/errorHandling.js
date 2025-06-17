export function catchErr(err) {
  if (err.name === 'ValidationError') {
    return Object.values(err.errors).at(0).message;
  }

  if (err.message) {
    return err.message;
  }

  return 'Something went wrong';
}