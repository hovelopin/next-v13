## 📚 Linking and Navigating
Next.js 라우터는 클라이언트 측 탐색과 함께 서버 중심 라우팅을 사용합니다. 즉각적인 로딩 상태와 동시 렌더링을 지원합니다. 즉, 탐색이 클라이언트 측 상태를 유지하고, 비용이 많이 드는 재렌더링을 피하며, 중단이 가능하고, 경쟁 조건을 일으키지 않습니다.

`usePathname()`을 사용하여 링크가 활성 상태인지 확인할 수 있습니다. 예를 들어 활성 링크에 클래스를 추가하려면 현재 경로명이 링크의 href와 일치하는지 확인할 수 있습니다.

```jsx
'use client'
 
import { usePathname } from 'next/navigation'
import { Link } from 'next/link'
 
export function Navigation({ navLinks }) {
  const pathname = usePathname()
 
  return (
    <>
      {navLinks.map((link) => {
        const isActive = pathname.startsWith(link.href)
 
        return (
          <Link
            className={isActive ? 'text-blue' : 'text-black'}
            href={link.href}
            key={link.name}
          >
            {link.name}
          </Link>
        )
      })}
    </>
  )
}

```

### Scrolling to an `id`

Link의 기본 동작은 변경된 경로 세그먼트의 상단으로 스크롤하는 것입니다. href에 정의된 ID가 있는 경우 일반 a 태그와 유사하게 특정 ID로 스크롤됩니다. 경로 세그먼트 상단으로 스크롤되는 것을 방지하려면 scroll={false}를 설정하고 href에 해시 ID를 추가합니다.

```jsx
<Link href="/#hashid" scroll={false}>
  Scroll to specific id.
</Link>
```

### Navigation의 작동 방식
- router는 클라이언트 측 캐시에서 변경되지 않은 세그먼트(예: shared layouts)를 재사용하여 불필요한 작업을 피합니다. 이를 부분 렌더링이라고도 합니다.
- 소프트 탐색 조건이 충족되면 라우터는 서버가 아닌 캐시에서 새 세그먼트를 가져옵니다. 그렇지 않은 경우 라우터는 하드 탐색을 수행하고 서버에서 서버 컴포넌트 페이로드를 가져옵니다.
- 생성된 경우 payload를 가져오는 동안 서버에서 로딩 UI가 표시됩니다.
- router는 캐시된 페이로드 또는 새로운 페이로드를 사용하여 클라이언트에서 새 세그먼트를 렌더링합니다.

## 📌 참고

[NEXT DOCS](https://nextjs.org/docs/app/building-your-application/routing/linking-and-navigating)