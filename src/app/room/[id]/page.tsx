'use client'
import DrawArea from '@/components/DrawArea'

export default function Page({ params }: { params?: { id: string } }) {
  return (
    <main>
      <DrawArea roomId={params?.id} />
    </main>
  )
}
