import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const salesData = [
  {
    name: "김민지",
    email: "minji.kim@email.com",
    avatar: "https://api.slingacademy.com/public/sample-users/1.png",
    fallback: "김민",
    amount: "+₩45,000",
  },
  {
    name: "이준호",
    email: "junho.lee@email.com",
    avatar: "https://api.slingacademy.com/public/sample-users/2.png",
    fallback: "이준",
    amount: "+₩15,000",
  },
  {
    name: "박서연",
    email: "seoyeon.park@email.com",
    avatar: "https://api.slingacademy.com/public/sample-users/3.png",
    fallback: "박서",
    amount: "+₩32,000",
  },
  {
    name: "정우진",
    email: "woojin@email.com",
    avatar: "https://api.slingacademy.com/public/sample-users/4.png",
    fallback: "정우",
    amount: "+₩8,500",
  },
  {
    name: "최지현",
    email: "jihyun.choi@email.com",
    avatar: "https://api.slingacademy.com/public/sample-users/5.png",
    fallback: "최지",
    amount: "+₩12,000",
  },
]

export function RecentSales() {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>따끈따끈한 예약 소식이에요!</CardTitle>
        <CardDescription>이번 달 265건의 소중한 만남이 이어졌어요.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-8">
          {salesData.map((sale, index) => (
            <div key={index} className="flex items-center">
              <Avatar className="h-9 w-9">
                <AvatarImage src={sale.avatar} alt="Avatar" />
                <AvatarFallback>{sale.fallback}</AvatarFallback>
              </Avatar>
              <div className="ml-4 space-y-1">
                <p className="text-sm leading-none font-medium">{sale.name}</p>
                <p className="text-muted-foreground text-sm">{sale.email}</p>
              </div>
              <div className="ml-auto font-medium">{sale.amount}</div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
