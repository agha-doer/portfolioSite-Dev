"use client";

import React from "react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { CodeBlock } from "./ui/code-block";

const CodeBlockSection = () => {
  const { ref, isVisible } = useScrollAnimation(0.2);

  const code = `import React, { useState, useCallback, useMemo } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { Card, Avatar, Tag, Button, Modal, Form, Input, Select } from 'antd';
import { UserOutlined, CalendarOutlined, FlagOutlined } from '@ant-design/icons';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

interface Task {
  id: string;
  title: string;
  description: string;
  assignee: string;
  priority: 'low' | 'medium' | 'high';
  dueDate: string;
  tags: string[];
}

interface Column {
  id: string;
  title: string;
  tasks: Task[];
}

const KanbanBoard: React.FC = () => {
  const [columns, setColumns] = useState<Column[]>([
    {
      id: 'todo',
      title: 'To Do',
      tasks: [
        {
          id: '1',
          title: 'Implement Rich Text Editor',
          description: 'Integrate Quill.js with advanced formatting',
          assignee: 'John Doe',
          priority: 'high',
          dueDate: '2024-02-15',
          tags: ['frontend', 'editor']
        }
      ]
    },
    { id: 'inprogress', title: 'In Progress', tasks: [] },
    { id: 'done', title: 'Done', tasks: [] }
  ]);

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [editorContent, setEditorContent] = useState('');
  const [form] = Form.useForm();

  const quillModules = useMemo(() => ({
    toolbar: [
      [{ 'header': [1, 2, 3, false] }],
      ['bold', 'italic', 'underline', 'strike'],
      [{ 'color': [] }, { 'background': [] }],
      [{ 'list': 'ordered'}, { 'list': 'bullet' }],
      [{ 'align': [] }],
      ['link', 'image', 'code-block'],
      ['clean']
    ],
    clipboard: { matchVisual: false }
  }), []);

  const onDragEnd = useCallback((result: any) => {
    const { destination, source, draggableId } = result;
    
    if (!destination || 
        (destination.droppableId === source.droppableId && 
         destination.index === source.index)) {
      return;
    }

    setColumns(prevColumns => {
      const newColumns = [...prevColumns];
      const sourceColumn = newColumns.find(col => col.id === source.droppableId);
      const destColumn = newColumns.find(col => col.id === destination.droppableId);
      
      if (!sourceColumn || !destColumn) return prevColumns;

      const [movedTask] = sourceColumn.tasks.splice(source.index, 1);
      destColumn.tasks.splice(destination.index, 0, movedTask);
      
      return newColumns;
    });
  }, []);

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return '#ff4d4f';
      case 'medium': return '#faad14';
      case 'low': return '#52c41a';
      default: return '#d9d9d9';
    }
  };

  const handleCreateTask = async (values: any) => {
    const newTask: Task = {
      id: Date.now().toString(),
      title: values.title,
      description: editorContent,
      assignee: values.assignee,
      priority: values.priority,
      dueDate: values.dueDate,
      tags: values.tags || []
    };

    setColumns(prev => prev.map(col => 
      col.id === 'todo' 
        ? { ...col, tasks: [...col.tasks, newTask] }
        : col
    ));
    
    setIsModalVisible(false);
    form.resetFields();
    setEditorContent('');
  };

  return (
    <div className="kanban-container p-6 bg-gray-50 min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Project Kanban Board</h1>
        <Button 
          type="primary" 
          onClick={() => setIsModalVisible(true)}
          icon={<FlagOutlined />}
        >
          Add Task
        </Button>
      </div>

      <DragDropContext onDragEnd={onDragEnd}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {columns.map(column => (
            <div key={column.id} className="bg-white rounded-lg shadow-sm p-4">
              <h3 className="font-semibold mb-4 text-gray-700">
                {column.title} ({column.tasks.length})
              </h3>
              
              <Droppable droppableId={column.id}>
                {(provided, snapshot) => (
                  <div
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                    className={\`min-h-[200px] \${
                      snapshot.isDraggingOver ? 'bg-blue-50' : ''
                    }\`}
                  >
                    {column.tasks.map((task, index) => (
                      <Draggable key={task.id} draggableId={task.id} index={index}>
                        {(provided, snapshot) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            className={\`mb-3 \${
                              snapshot.isDragging ? 'opacity-75' : ''
                            }\`}
                          >
                            <Card
                              size="small"
                              className="shadow-sm hover:shadow-md transition-shadow"
                              title={
                                <div className="flex items-center justify-between">
                                  <span className="text-sm font-medium">
                                    {task.title}
                                  </span>
                                  <Tag color={getPriorityColor(task.priority)}>
                                    {task.priority}
                                  </Tag>
                                </div>
                              }
                            >
                              <div 
                                className="text-xs text-gray-600 mb-2"
                                dangerouslySetInnerHTML={{ 
                                  __html: task.description.slice(0, 100) + '...' 
                                }}
                              />
                              
                              <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-2">
                                  <Avatar 
                                    size="small" 
                                    icon={<UserOutlined />} 
                                  />
                                  <span className="text-xs">{task.assignee}</span>
                                </div>
                                
                                <div className="flex items-center text-xs text-gray-500">
                                  <CalendarOutlined className="mr-1" />
                                  {task.dueDate}
                                </div>
                              </div>
                              
                              <div className="mt-2">
                                {task.tags.map(tag => (
                                  <Tag key={tag} size="small" className="text-xs">
                                    {tag}
                                  </Tag>
                                ))}
                              </div>
                            </Card>
                          </div>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </div>
          ))}
        </div>
      </DragDropContext>

      <Modal
        title="Create New Task"
        open={isModalVisible}
        onCancel={() => setIsModalVisible(false)}
        footer={null}
        width={800}
      >
        <Form
          form={form}
          layout="vertical"
          onFinish={handleCreateTask}
          className="mt-4"
        >
          <Form.Item
            name="title"
            label="Task Title"
            rules={[{ required: true, message: 'Please enter task title' }]}
          >
            <Input placeholder="Enter task title" />
          </Form.Item>

          <Form.Item
            name="description"
            label="Description"
            rules={[{ required: true, message: 'Please enter description' }]}
          >
            <ReactQuill
              theme="snow"
              value={editorContent}
              onChange={setEditorContent}
              modules={quillModules}
              placeholder="Describe your task in detail..."
              style={{ height: '200px', marginBottom: '50px' }}
            />
          </Form.Item>

          <div className="grid grid-cols-2 gap-4">
            <Form.Item
              name="assignee"
              label="Assignee"
              rules={[{ required: true, message: 'Please select assignee' }]}
            >
              <Select placeholder="Select assignee">
                <Select.Option value="John Doe">John Doe</Select.Option>
                <Select.Option value="Jane Smith">Jane Smith</Select.Option>
                <Select.Option value="Mike Johnson">Mike Johnson</Select.Option>
              </Select>
            </Form.Item>

            <Form.Item
              name="priority"
              label="Priority"
              rules={[{ required: true, message: 'Please select priority' }]}
            >
              <Select placeholder="Select priority">
                <Select.Option value="low">Low</Select.Option>
                <Select.Option value="medium">Medium</Select.Option>
                <Select.Option value="high">High</Select.Option>
              </Select>
            </Form.Item>
          </div>

          <Form.Item
            name="dueDate"
            label="Due Date"
            rules={[{ required: true, message: 'Please select due date' }]}
          >
            <Input type="date" />
          </Form.Item>

          <Form.Item name="tags" label="Tags">
            <Select
              mode="tags"
              placeholder="Add tags"
              style={{ width: '100%' }}
            />
          </Form.Item>

          <div className="flex justify-end space-x-2">
            <Button onClick={() => setIsModalVisible(false)}>
              Cancel
            </Button>
            <Button type="primary" htmlType="submit">
              Create Task
            </Button>
          </div>
        </Form>
      </Modal>
    </div>
  );
};

export default KanbanBoard;`;

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Quality <span className="text-gradient-primary">Code</span> And Optimized Performance
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Clean, efficient code that delivers exceptional performance and user experience.
          </p>
        </motion.div>

        {/* First Row: Code on Left, Description on Right */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid lg:grid-cols-2 gap-12 mb-16"
        >
          {/* Left Side - Code Block */}
          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-6">
            <CodeBlock
              language="jsx"
              filename="KanbanBoard.tsx"
              highlightLines={[9, 13, 14, 18]}
              code={code}
            />
          </div>

          {/* Right Side - Description */}
          <div className="flex flex-col justify-center">
            <h3 className="text-3xl font-bold mb-6">Clean & Maintainable Code</h3>
            <div className="space-y-4 text-lg text-muted-foreground">
              <p>
                Our development approach focuses on writing clean, readable, and maintainable code 
                that follows industry best practices and modern standards.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-primary mr-3">✓</span>
                  <span>Semantic HTML and accessible components</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3">✓</span>
                  <span>TypeScript for type safety and better DX</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3">✓</span>
                  <span>Component-based architecture with reusability</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3">✓</span>
                  <span>Modern React patterns and hooks</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3">✓</span>
                  <span>Comprehensive error handling and validation</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Second Row: Description on Left, Bundle Size on Right */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid lg:grid-cols-2 gap-12"
        >
          {/* Left Side - Description */}
          <div className="flex flex-col justify-center">
            <h3 className="text-3xl font-bold mb-6">Optimized Performance</h3>
            <div className="space-y-4 text-lg text-muted-foreground">
              <p>
                We prioritize performance optimization to ensure fast loading times, 
                smooth interactions, and excellent user experience across all devices.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-primary mr-3">✓</span>
                  <span>Code splitting and lazy loading</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3">✓</span>
                  <span>Image optimization and compression</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3">✓</span>
                  <span>Minimal bundle size with tree shaking</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3">✓</span>
                  <span>Efficient state management</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3">✓</span>
                  <span>CDN integration for global performance</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Side - Bundle Analysis Image */}
          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8">
            <h4 className="text-2xl font-bold mb-6 text-center">Bundle Analysis</h4>
            <div className="flex justify-center items-center">
              <img 
                src="/analyzer.png" 
                alt="Bundle Analysis Chart" 
                className="max-w-full h-auto rounded-lg shadow-md"
              />
            </div>
            <p className="text-sm text-muted-foreground mt-4 text-center">
              Real-time bundle analysis and optimization insights
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CodeBlockSection;
