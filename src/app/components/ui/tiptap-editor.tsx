'use client'

import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Highlight from '@tiptap/extension-highlight'
import { TextStyle } from '@tiptap/extension-text-style'
import Color from '@tiptap/extension-color'
import TaskList from '@tiptap/extension-task-list'
import TaskItem from '@tiptap/extension-task-item'
import FontFamily from '@tiptap/extension-font-family'
import TextAlign from '@tiptap/extension-text-align'
import Underline from '@tiptap/extension-underline'
import Strike from '@tiptap/extension-strike'
import CodeBlock from '@tiptap/extension-code-block'
import HorizontalRule from '@tiptap/extension-horizontal-rule'
import { useState, useEffect } from 'react'
import { 
  Bold, 
  Italic, 
  List, 
  ListOrdered, 
  Quote, 
  Heading1, 
  Heading2,
  Undo,
  Redo,
  UnderlineIcon,
  Strikethrough,
  Highlighter,
  Palette,
  AlignLeft,
  AlignCenter,
  AlignRight,
  AlignJustify,
  CheckSquare,
  Code,
  Minus,
  Type,
  ChevronDown
} from 'lucide-react'
import { Button } from './button'

interface TiptapEditorProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
}

const TiptapEditor: React.FC<TiptapEditorProps> = ({ 
  value, 
  onChange, 
  placeholder = "Start writing your blog content...",
  className = ""
}) => {
  const [isMounted, setIsMounted] = useState(false)
  const [showColorPicker, setShowColorPicker] = useState(false)
  const [showFontFamily, setShowFontFamily] = useState(false)

  const editor = useEditor({
    extensions: [
      StarterKit,
      Highlight,
      TextStyle,
      Color,
      TaskList,
      TaskItem.configure({
        nested: true,
      }),
      FontFamily.configure({
        types: ['textStyle'],
      }),
      TextAlign.configure({
        types: ['heading', 'paragraph'],
      }),
      Underline,
      Strike,
      CodeBlock,
      HorizontalRule,
    ],
    content: value || '',
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML())
    },
    editorProps: {
      attributes: {
        class: 'focus:outline-none min-h-[200px]',
      },
    },
    // Don't render immediately on the server to avoid SSR issues
    immediatelyRender: false,
  })

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    if (editor && value !== editor.getHTML()) {
      editor.commands.setContent(value || '')
    }
  }, [editor, value])

  if (!isMounted) {
    return (
      <div className={`border border-gray-300 rounded-md min-h-[200px] p-4 ${className}`}>
        <div className="animate-pulse">
          <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
          <div className="h-4 bg-gray-200 rounded w-1/2 mb-2"></div>
          <div className="h-4 bg-gray-200 rounded w-5/6"></div>
        </div>
      </div>
    )
  }

  if (!editor) {
    return null
  }

  const fontFamilies = [
    { name: 'Default', value: 'Inter' },
    { name: 'Serif', value: 'Georgia' },
    { name: 'Mono', value: 'Courier New' },
    { name: 'Arial', value: 'Arial' },
    { name: 'Times', value: 'Times New Roman' },
  ]

  const colors = [
    '#000000', '#434343', '#666666', '#999999', '#b7b7b7', '#cccccc', '#d9d9d9', '#efefef', '#f3f3f3', '#ffffff',
    '#980000', '#ff0000', '#ff9900', '#ffff00', '#00ff00', '#00ffff', '#4a86e8', '#0000ff', '#9900ff', '#ff00ff',
    '#e6b8af', '#f4cccc', '#fce5cd', '#fff2cc', '#d9ead3', '#d0e0e3', '#c9daf8', '#cfe2f3', '#d9d2e9', '#ead1dc',
    '#dd7e6b', '#ea9999', '#f9cb9c', '#ffe599', '#b6d7a8', '#a2c4c9', '#a4c2f4', '#a4c2f4', '#b4a7d6', '#d5a6bd',
  ]

  const MenuBar = () => {
    return (
      <div className="border-b border-gray-200 p-2 bg-gray-50 rounded-t-md">
        <div className="flex items-center gap-1 flex-wrap">
          {/* Text Formatting */}
                     <Button
             variant="ghost"
             size="sm"
             onClick={() => editor.chain().focus().toggleBold().run()}
             className={`hover:bg-black hover:text-white transition-colors ${
               editor.isActive('bold') ? 'bg-black text-white' : ''
             }`}
           >
            <Bold className="w-4 h-4" />
          </Button>
                     <Button
             variant="ghost"
             size="sm"
             onClick={() => editor.chain().focus().toggleItalic().run()}
             className={`hover:bg-black hover:text-white transition-colors ${
               editor.isActive('italic') ? 'bg-black text-white' : ''
             }`}
           >
            <Italic className="w-4 h-4" />
          </Button>
                     <Button
             variant="ghost"
             size="sm"
             onClick={() => editor.chain().focus().toggleUnderline().run()}
             className={`hover:bg-black hover:text-white transition-colors ${
               editor.isActive('underline') ? 'bg-black text-white' : ''
             }`}
           >
            <UnderlineIcon className="w-4 h-4" />
          </Button>
                     <Button
             variant="ghost"
             size="sm"
             onClick={() => editor.chain().focus().toggleStrike().run()}
             className={`hover:bg-black hover:text-white transition-colors ${
               editor.isActive('strike') ? 'bg-black text-white' : ''
             }`}
           >
            <Strikethrough className="w-4 h-4" />
          </Button>
                     <Button
             variant="ghost"
             size="sm"
             onClick={() => editor.chain().focus().toggleHighlight().run()}
             className={`hover:bg-black hover:text-white transition-colors ${
               editor.isActive('highlight') ? 'bg-black text-white' : ''
             }`}
           >
            <Highlighter className="w-4 h-4" />
          </Button>
          
          <div className="w-px h-6 bg-gray-300 mx-1"></div>
          
          {/* Headings */}
                     <Button
             variant="ghost"
             size="sm"
             onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
             className={`hover:bg-black hover:text-white transition-colors ${
               editor.isActive('heading', { level: 1 }) ? 'bg-black text-white' : ''
             }`}
           >
            <Heading1 className="w-4 h-4" />
          </Button>
                     <Button
             variant="ghost"
             size="sm"
             onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
             className={`hover:bg-black hover:text-white transition-colors ${
               editor.isActive('heading', { level: 2 }) ? 'bg-black text-white' : ''
             }`}
           >
            <Heading2 className="w-4 h-4" />
          </Button>
          
          <div className="w-px h-6 bg-gray-300 mx-1"></div>
          
          {/* Lists */}
                     <Button
             variant="ghost"
             size="sm"
             onClick={() => editor.chain().focus().toggleBulletList().run()}
             className={`hover:bg-black hover:text-white transition-colors ${
               editor.isActive('bulletList') ? 'bg-black text-white' : ''
             }`}
           >
            <List className="w-4 h-4" />
          </Button>
                     <Button
             variant="ghost"
             size="sm"
             onClick={() => editor.chain().focus().toggleOrderedList().run()}
             className={`hover:bg-black hover:text-white transition-colors ${
               editor.isActive('orderedList') ? 'bg-black text-white' : ''
             }`}
           >
            <ListOrdered className="w-4 h-4" />
          </Button>
                     <Button
             variant="ghost"
             size="sm"
             onClick={() => editor.chain().focus().toggleTaskList().run()}
             className={`hover:bg-black hover:text-white transition-colors ${
               editor.isActive('taskList') ? 'bg-black text-white' : ''
             }`}
           >
            <CheckSquare className="w-4 h-4" />
          </Button>
          
          <div className="w-px h-6 bg-gray-300 mx-1"></div>
          
          {/* Blocks */}
                     <Button
             variant="ghost"
             size="sm"
             onClick={() => editor.chain().focus().toggleBlockquote().run()}
             className={`hover:bg-black hover:text-white transition-colors ${
               editor.isActive('blockquote') ? 'bg-black text-white' : ''
             }`}
           >
            <Quote className="w-4 h-4" />
          </Button>
                     <Button
             variant="ghost"
             size="sm"
             onClick={() => editor.chain().focus().toggleCodeBlock().run()}
             className={`hover:bg-black hover:text-white transition-colors ${
               editor.isActive('codeBlock') ? 'bg-black text-white' : ''
             }`}
           >
            <Code className="w-4 h-4" />
          </Button>
                     <Button
             variant="ghost"
             size="sm"
             onClick={() => editor.chain().focus().setHorizontalRule().run()}
             className="hover:bg-black hover:text-white transition-colors"
           >
            <Minus className="w-4 h-4" />
          </Button>
          
          <div className="w-px h-6 bg-gray-300 mx-1"></div>
          
          {/* Alignment */}
                     <Button
             variant="ghost"
             size="sm"
             onClick={() => editor.chain().focus().setTextAlign('left').run()}
             className={`hover:bg-black hover:text-white transition-colors ${
               editor.isActive({ textAlign: 'left' }) ? 'bg-black text-white' : ''
             }`}
           >
            <AlignLeft className="w-4 h-4" />
          </Button>
                     <Button
             variant="ghost"
             size="sm"
             onClick={() => editor.chain().focus().setTextAlign('center').run()}
             className={`hover:bg-black hover:text-white transition-colors ${
               editor.isActive({ textAlign: 'center' }) ? 'bg-black text-white' : ''
             }`}
           >
            <AlignCenter className="w-4 h-4" />
          </Button>
                     <Button
             variant="ghost"
             size="sm"
             onClick={() => editor.chain().focus().setTextAlign('right').run()}
             className={`hover:bg-black hover:text-white transition-colors ${
               editor.isActive({ textAlign: 'right' }) ? 'bg-black text-white' : ''
             }`}
           >
            <AlignRight className="w-4 h-4" />
          </Button>
                     <Button
             variant="ghost"
             size="sm"
             onClick={() => editor.chain().focus().setTextAlign('justify').run()}
             className={`hover:bg-black hover:text-white transition-colors ${
               editor.isActive({ textAlign: 'justify' }) ? 'bg-black text-white' : ''
             }`}
           >
            <AlignJustify className="w-4 h-4" />
          </Button>
          
          <div className="w-px h-6 bg-gray-300 mx-1"></div>
          
          {/* Font Family Dropdown */}
          <div className="relative">
                         <Button
               variant="ghost"
               size="sm"
               onClick={() => setShowFontFamily(!showFontFamily)}
               className="flex items-center gap-1 hover:bg-black hover:text-white transition-colors"
             >
              <Type className="w-4 h-4" />
              <span className="text-xs">Font</span>
              <ChevronDown className="w-3 h-3" />
            </Button>
            {showFontFamily && (
              <div className="absolute top-full left-0 mt-1 bg-white border border-gray-300 rounded-md shadow-lg z-10 min-w-[150px]">
                {fontFamilies.map((font) => (
                                     <button
                     key={font.value}
                     className="block w-full text-left px-3 py-2 text-sm hover:bg-black hover:text-white transition-colors"
                     onClick={() => {
                       editor.chain().focus().setFontFamily(font.value).run()
                       setShowFontFamily(false)
                     }}
                   >
                    {font.name}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Color Picker */}
          <div className="relative">
                         <Button
               variant="ghost"
               size="sm"
               onClick={() => setShowColorPicker(!showColorPicker)}
               className="flex items-center gap-1 hover:bg-black hover:text-white transition-colors"
             >
              <Palette className="w-4 h-4" />
              <span className="text-xs">Color</span>
            </Button>
            {showColorPicker && (
              <div className="absolute top-full left-0 mt-1 bg-white border border-gray-300 rounded-md shadow-lg z-10 p-2">
                <div className="grid grid-cols-10 gap-1">
                  {colors.map((color) => (
                    <button
                      key={color}
                      className="w-6 h-6 rounded border border-gray-300 hover:scale-110 transition-transform"
                      style={{ backgroundColor: color }}
                      onClick={() => {
                        editor.chain().focus().setColor(color).run()
                        setShowColorPicker(false)
                      }}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="w-px h-6 bg-gray-300 mx-1"></div>

          {/* Undo/Redo */}
                     <Button
             variant="ghost"
             size="sm"
             onClick={() => editor.chain().focus().undo().run()}
             disabled={!editor.can().undo()}
             className="hover:bg-black hover:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
           >
            <Undo className="w-4 h-4" />
          </Button>
                     <Button
             variant="ghost"
             size="sm"
             onClick={() => editor.chain().focus().redo().run()}
             disabled={!editor.can().redo()}
             className="hover:bg-black hover:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
           >
            <Redo className="w-4 h-4" />
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className={`border border-gray-300 rounded-md ${className}`}>
      <MenuBar />
      <div className="bg-white rounded-b-md relative">
        <EditorContent 
          editor={editor} 
          className="min-h-[200px] focus:outline-none"
        />
        {!editor.getText().trim() && (
          <div className="absolute top-4 left-4 text-gray-400 pointer-events-none">
            {placeholder}
          </div>
        )}
      </div>
    </div>
  )
}

export default TiptapEditor
