const NotFound = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center gap-4">
      <div className="flex flex-row items-baseline gap-2 underline decoration-2">
        <div>ошибка</div>
        <div className="text-6xl">404</div>
      </div>
      <div>страница не найдена</div>
    </div>
  )
}

export default NotFound
