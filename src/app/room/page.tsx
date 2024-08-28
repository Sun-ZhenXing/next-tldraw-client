'use client'
import { tldrawTranslations } from '@/utils/i18n'
import { Tldraw } from 'tldraw'
import 'tldraw/tldraw.css'

export default function Page() {
  return (
    <div className="fixed inset-0">
      <Tldraw overrides={{
        translations: tldrawTranslations,
      }} />
    </div>
  )
}
