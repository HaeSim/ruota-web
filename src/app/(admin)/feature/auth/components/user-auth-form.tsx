"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { Loader2 } from "lucide-react"
import { useRouter, useSearchParams } from "next/navigation"
import { signIn } from "next-auth/react"
import { useTransition } from "react"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"
import GmailSignInButton from "./gmail-auth-button"
import NaverSignInButton from "./naver-auth-button"

const formSchema = z.object({
  email: z.string().email({ message: "올바른 이메일 주소를 입력해주세요" }),
})

type UserFormValue = z.infer<typeof formSchema>

export default function UserAuthForm() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const callbackUrl = searchParams.get("callbackUrl")
  const [loading, startTransition] = useTransition()
  const defaultValues = {
    email: "admin@ruota.com",
  }
  const form = useForm<UserFormValue>({
    resolver: zodResolver(formSchema),
    defaultValues,
  })

  const onSubmit = async (data: UserFormValue) => {
    startTransition(() => {
      signIn("credentials", {
        email: data.email,
        callbackUrl: callbackUrl ?? "/admin/dashboard",
        redirect: false,
      }).then((response) => {
        if (response?.ok) {
          toast.success("성공적으로 로그인되었습니다!")
          if (callbackUrl) {
            router.push(callbackUrl)
          } else {
            router.push("/admin/dashboard")
          }
        } else {
          toast.error("로그인에 실패했습니다.")
        }
      })
    })
  }

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-2">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-stone-700">이메일</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="이메일 주소를 입력하세요"
                    disabled={loading}
                    {...field}
                    className="border-stone-300 focus:border-stone-500"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            disabled={loading}
            className={cn(
              "mt-2 ml-auto w-full bg-stone-800 hover:bg-stone-700",
              "cursor-pointer",
              loading && "cursor-not-allowed opacity-70"
            )}
            type="submit"
          >
            {loading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                처리 중...
              </>
            ) : (
              "이메일로 계속하기"
            )}
          </Button>
        </form>
      </Form>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t border-stone-300" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-stone-50 px-2 text-stone-500">또는</span>
        </div>
      </div>
      <div className="space-y-2">
        <GmailSignInButton disabled={loading} />
        <NaverSignInButton disabled={loading} />
      </div>
    </>
  )
}
