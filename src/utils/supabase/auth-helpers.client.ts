import { Provider } from "@supabase/supabase-js"
import { createSupabaseBrowser } from "./supabase-browser"

/**
 * 브라우저 환경에서 OAuth 로그인 (ex. 카카오)
 * - provider: "kakao" 등
 * - callbackUrl: 로그인 후 리다이렉트할 URL
 */
export async function signInWithOAuth(provider: Provider, callbackUrl: string) {
  const supabase = createSupabaseBrowser()
  const { error } = await supabase.auth.signInWithOAuth({
    provider,
    options: { redirectTo: callbackUrl },
  })
  if (error) throw error
}

/**
 * 브라우저 환경에서 로그아웃
 */
export async function signOut() {
  const supabase = createSupabaseBrowser()
  const { error } = await supabase.auth.signOut()
  if (error) throw error
}
