export default function redirect(func, path, info) {
  func.navigate(path, { info });
};
