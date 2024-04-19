import { Skeleton } from '@/components/ui/skeleton'

const LoaderSkeleton = () => {
  return (
    <div className="py-2 px-8 sticky flex items-center justify-between border-b-[2px]">
      <Skeleton className="w-[130px] h-[45px] rounded-full" />
      <div className="p-1.5 flex flex-row items-center justify-center gap-1.5 border rounded-md">
        <Skeleton className="w-[110px] h-[32px]" />
        <Skeleton className="w-[118px] h-[32px]" />
        <Skeleton className="w-[98px] h-[32px]" />
      </div>
      <div className="flex items-center justify-between gap-4">
        <Skeleton className="w-10 h-[40px]" />
        <Skeleton className="w-[96px] h-[40px]" />
      </div>
    </div>
  )
}

export default LoaderSkeleton
