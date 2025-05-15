export default function SubLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-gnb h-[calc(100dvh-68px)] bg-stone-100 md:h-[calc(100dvh-68px-140px)]">
      <div className="h-full">{children}</div>
    </div>
  )
}
