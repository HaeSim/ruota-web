import { Metadata } from "next"

export const metadata: Metadata = {
  title: "회사 소개 | ruota",
  description: "루오타 브랜드와 스토리에 대해 알아보세요",
}

export default function AboutPage() {
  const milestones = [
    {
      year: "2019",
      title: "루오타 창립",
      description: "커피에 대한 열정을 가진 바리스타들이 모여 루오타 브랜드를 설립했습니다.",
    },
    {
      year: "2020",
      title: "첫 모바일 커피바 론칭",
      description: "첫 번째 모바일 커피바를 디자인하고 제작하여 서비스를 시작했습니다.",
    },
    {
      year: "2021",
      title: "브랜드 확장",
      description: "다양한 이벤트와 기업 행사에서 케이터링 서비스를 제공하며 브랜드를 확장했습니다.",
    },
    {
      year: "2022",
      title: "바리스타 아카데미 설립",
      description: "전문 바리스타를 양성하고 커피 문화를 전파하기 위한 아카데미를 설립했습니다.",
    },
    {
      year: "2023",
      title: "자체 로스팅 시작",
      description: "루오타만의 특별한 커피 프로필을 위한 자체 로스팅을 시작했습니다.",
    },
  ]

  const teamMembers = [
    {
      name: "김민수",
      position: "대표 & 헤드 바리스타",
      bio: "커피 산업에서 10년 이상의 경험을 가진 커피 전문가입니다. SCA 인증 바리스타이자 로스터입니다.",
    },
    {
      name: "이지원",
      position: "크리에이티브 디렉터",
      bio: "브랜드 아이덴티티와 시각적 경험을 담당하며, 루오타의 독특한 스타일을 만들어냅니다.",
    },
    {
      name: "박준호",
      position: "이벤트 매니저",
      bio: "다양한 행사 경험을 바탕으로 완벽한 케이터링 서비스를 기획하고 실행합니다.",
    },
  ]

  return (
    <div className="min-h-screen bg-stone-100 py-16">
      <div className="container mx-auto px-4">
        <h1 className="mb-2 text-center text-4xl font-bold">회사 소개</h1>
        <p className="mb-12 text-center text-lg text-gray-600">루오타의 이야기와 철학을 소개합니다</p>

        <div className="mx-auto mb-16 max-w-3xl">
          <h2 className="mb-4 text-2xl font-semibold">브랜드 스토리</h2>
          <div className="rounded-lg bg-white p-8 shadow-md">
            <p className="mb-4 text-gray-700">
              루오타(Ruota)는 이탈리아어로 '바퀴'를 의미합니다. 마치 바퀴가 어디든 갈 수 있듯이, 루오타는 어디든 찾아가
              최고의 커피 경험을 선사한다는 의미를 담고 있습니다.
            </p>
            <p className="mb-4 text-gray-700">
              우리는 2019년에 커피에 대한 열정을 가진 바리스타들이 모여 시작했습니다. 단순히 커피를 제공하는 것을 넘어,
              각 행사와 공간에 맞춘 특별한 경험을 만들고자 합니다.
            </p>
            <p className="text-gray-700">
              루오타는 최고 품질의 원두와 숙련된 바리스타, 그리고 세심하게 디자인된 모바일 커피바를 통해 어떤 장소에서든
              프리미엄 커피 경험을 제공합니다.
            </p>
          </div>
        </div>

        <div className="mx-auto mb-16 max-w-3xl">
          <h2 className="mb-4 text-2xl font-semibold">연혁</h2>
          <div className="rounded-lg bg-white p-8 shadow-md">
            <div className="space-y-6">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex">
                  <div className="mr-4 flex-shrink-0">
                    <div className="flex h-10 w-24 items-center justify-center rounded bg-stone-800 text-white">
                      {milestone.year}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">{milestone.title}</h3>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-3xl">
          <h2 className="mb-4 text-2xl font-semibold">팀 소개</h2>
          <div className="rounded-lg bg-white p-8 shadow-md">
            <div className="space-y-6">
              {teamMembers.map((member, index) => (
                <div key={index} className="border-b border-gray-200 pb-6 last:border-0 last:pb-0">
                  <h3 className="text-xl font-medium">{member.name}</h3>
                  <p className="mb-2 text-stone-700">{member.position}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
