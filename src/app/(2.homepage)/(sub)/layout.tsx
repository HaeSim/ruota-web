export default function SubLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-gnb flex min-h-[calc(100dvh-68px-64px)] flex-col bg-stone-100 md:min-h-[calc(100dvh-68px-140px)]">
      <div className="flex-1">{children}</div>
    </div>
  )
}
