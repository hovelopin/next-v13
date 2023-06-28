'use client'

// usePathname은 현재 URL의 경로명을 읽을 수 있는 Client Component Hook이다. ( query parameter는 읽지 않는다. )
// 서버 컴포넌트에서 현재 URL을 읽는 것은 지원되지 않습니다. 
// router가 준비되지 않은 경우에는 usePathname은 null을 반환할 수 있습니다. 
import { usePathname } from "next/navigation";

export default function Routing(){
  const pathname = usePathname();

  console.log('pathname',pathname);

  return <div>안녕 pathname : {pathname}</div>
}