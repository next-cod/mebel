export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-6 text-center">
      <span className="eyebrow">404</span>
      <h1 className="serif text-4xl text-primary">Страница не найдена</h1>
      <a href="/" className="btn-ghost">На главную</a>
    </div>
  );
}
