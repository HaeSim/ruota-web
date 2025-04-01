import { Metadata } from "next"

export const metadata: Metadata = {
  title: "소셜 미디어 | ruota",
  description: "루오타의 다양한 소셜 미디어 채널을 확인하세요",
}

export default function SocialPage() {
  const socialLinks = [
    {
      name: "Instagram",
      url: "https://www.instagram.com/ruota.coffee",
      description: "루오타의 일상과 이벤트 현장의 모습을 확인해보세요.",
      iconClass: "i-[mdi--instagram]",
      bgColor: "bg-gradient-to-tr from-purple-500 via-pink-500 to-yellow-500",
    },
    {
      name: "네이버 블로그",
      url: "https://blog.naver.com/ruota",
      description: "루오타의 상세한 서비스 정보와 후기를 확인할 수 있습니다.",
      iconClass: "i-[simple-icons--naver]",
      bgColor: "bg-green-500",
    },
    {
      name: "카카오톡 채널",
      url: "https://pf.kakao.com/_ruota",
      description: "카카오톡에서 루오타를 친구 추가하고 소식을 받아보세요.",
      iconClass: "i-[ri--kakao-talk-fill]",
      bgColor: "bg-yellow-400",
    },
    {
      name: "유튜브",
      url: "https://www.youtube.com/ruota",
      description: "루오타의 이벤트 영상과 바리스타 팁을 확인해보세요.",
      iconClass: "i-[mdi--youtube]",
      bgColor: "bg-red-600",
    },
  ]

  return (
    <div className="min-h-screen bg-stone-100 py-16">
      <div className="container mx-auto px-4">
        <h1 className="mb-2 text-center text-4xl font-bold">소셜 미디어</h1>
        <p className="mb-12 text-center text-lg text-gray-600">
          루오타의 다양한 소셜 미디어 채널에서 최신 소식을 확인하세요
        </p>

        <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block transform rounded-lg bg-white p-6 shadow-md transition hover:scale-105 hover:shadow-lg"
            >
              <div className="mb-4 flex items-center">
                <div
                  className={`mr-4 flex h-12 w-12 items-center justify-center rounded-full ${link.bgColor} text-white`}
                >
                  {/* 아이콘 자리 - 실제 아이콘 라이브러리 사용 필요 */}
                  <span className="text-2xl">{link.name[0]}</span>
                </div>
                <h2 className="text-xl font-semibold">{link.name}</h2>
              </div>
              <p className="text-gray-600">{link.description}</p>
            </a>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-700">
            해시태그 <span className="font-medium text-stone-800">#루오타</span>{" "}
            <span className="font-medium text-stone-800">#루오타커피</span>{" "}
            <span className="font-medium text-stone-800">#루오타케이터링</span>을 사용해서 여러분의 루오타 경험을
            공유해주세요!
          </p>
        </div>
      </div>
    </div>
  )
}
