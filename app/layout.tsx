import type {Metadata} from 'next';
import './globals.css';
export const metadata:Metadata={title:'QS cet-6 · 小猫陪你学六级',description:'用主动回忆、间隔复习与语境练习，让六级单词和句式真正留下来。',manifest:'/manifest.webmanifest',icons:{icon:'/icon.svg'}};
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){return <html lang="zh-CN"><body>{children}</body></html>}
