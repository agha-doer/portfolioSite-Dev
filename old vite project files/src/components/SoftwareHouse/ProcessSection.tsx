import React, { useState, useEffect } from 'react';
import { motion, useAnimation, useMotionValue, useTransform } from 'framer-motion';
import { 
  Search, 
  Palette, 
  Code, 
  Rocket, 
  ArrowRight, 
  Circle, 
  Triangle, 
  Square,
  Hexagon,
  Star,
  Zap,
  CheckCircle,
  TrendingUp,
  BarChart3,
  PieChart as PieChartIcon,
  Activity,
  Users,
  Award
} from 'lucide-react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  RadialBarChart,
  RadialBar,
  AreaChart,
  Area,
} from 'recharts';
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
} from '@/components/ui/chart';

const steps = [
  { 
    title: 'Discover', 
    text: 'Workshops to map goals, constraints, and success metrics.',
    icon: Search,
    color: 'from-rose-800 to-rose-600',
    bgColor: 'bg-rose-800/10',
    borderColor: 'border-rose-800/30',
    progress: 25,
    metrics: [
      { label: 'Requirements', value: 100, color: 'bg-rose-800' },
      { label: 'Timeline', value: 85, color: 'bg-rose-600' },
      { label: 'Budget', value: 90, color: 'bg-rose-700' }
    ]
  },
  { 
    title: 'Design', 
    text: 'Low to high fidelity flows with interactive prototypes.',
    icon: Palette,
    color: 'from-red-800 to-red-600',
    bgColor: 'bg-red-800/10',
    borderColor: 'border-red-800/30',
    progress: 50,
    metrics: [
      { label: 'Wireframes', value: 100, color: 'bg-red-800' },
      { label: 'Prototypes', value: 75, color: 'bg-red-600' },
      { label: 'Testing', value: 60, color: 'bg-red-700' }
    ]
  },
  { 
    title: 'Build', 
    text: 'Atomic components, robust hooks, and clean integrations.',
    icon: Code,
    color: 'from-amber-800 to-amber-600',
    bgColor: 'bg-amber-800/10',
    borderColor: 'border-amber-800/30',
    progress: 75,
    metrics: [
      { label: 'Components', value: 85, color: 'bg-amber-800' },
      { label: 'Integration', value: 70, color: 'bg-amber-600' },
      { label: 'Testing', value: 80, color: 'bg-amber-700' }
    ]
  },
  { 
    title: 'Launch', 
    text: 'Testing, monitoring, and rollout with observability.',
    icon: Rocket,
    color: 'from-red-900 to-red-700',
    bgColor: 'bg-red-900/10',
    borderColor: 'border-red-900/30',
    progress: 100,
    metrics: [
      { label: 'Deployment', value: 100, color: 'bg-red-900' },
      { label: 'Monitoring', value: 95, color: 'bg-red-700' },
      { label: 'Performance', value: 90, color: 'bg-red-800' }
    ]
  },
];

const ProcessSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const controls = useAnimation();
  const scrollY = useMotionValue(0);
  const opacity = useTransform(scrollY, [0, 300], [0, 1]);
  const scale = useTransform(scrollY, [0, 300], [0.8, 1]);

  // Sample datasets for charts
  const velocityData = [
    { sprint: 'S1', velocity: 18 },
    { sprint: 'S2', velocity: 22 },
    { sprint: 'S3', velocity: 20 },
    { sprint: 'S4', velocity: 26 },
    { sprint: 'S5', velocity: 24 },
  ];

  const allocationData = [
    { name: 'Research', hours: 120 },
    { name: 'Design', hours: 180 },
    { name: 'Development', hours: 420 },
    { name: 'QA', hours: 160 },
  ];

  const breakdownData = [
    { name: 'Frontend', value: 35, color: '#9d174d' },
    { name: 'Backend', value: 30, color: '#991b1b' },
    { name: 'Design', value: 20, color: '#92400e' },
    { name: 'QA', value: 15, color: '#7f1d1d' },
  ];

  const radialData = [
    { name: 'Discover', value: 25, fill: '#9d174d' },
    { name: 'Design', value: 50, fill: '#b91c1c' },
    { name: 'Build', value: 75, fill: '#92400e' },
    { name: 'Launch', value: 100, fill: '#7f1d1d' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    controls.start({
      rotate: [0, 360],
      transition: { duration: 20, repeat: Infinity, ease: "linear" }
    });
  }, [controls]);

  return (
    <section id="process" className="py-20 relative overflow-hidden bg-gradient-to-br from-gray-50 to-white">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={controls}
          className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-rose-800/20 to-red-800/20 rounded-full blur-xl"
        />
        <motion.div
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{ 
            rotate: { duration: 30, repeat: Infinity, ease: "linear" },
            scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
          }}
          className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-r from-red-800/30 to-rose-800/30 rounded-full blur-lg"
        />
        <motion.div
          animate={{ 
            y: [0, -20, 0],
            x: [0, 10, 0],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-20 left-1/4 w-16 h-16 bg-gradient-to-r from-amber-800/25 to-red-800/25 rounded-full blur-md"
        />
      </div>

      <div className="container relative z-10">
        <motion.header 
          className="mb-16 text-center"
          style={{ opacity, scale }}
        >
          <h2 className="font-display text-4xl md:text-6xl font-bold mb-6 text-gray-900">
            Our <span className="bg-gradient-to-r from-rose-800 via-red-800 to-amber-800 bg-clip-text text-transparent">Process</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A dynamic journey from concept to deployment with real-time progress tracking
          </p>
        </motion.header>

        {/* Main Process Flow */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Animated Process Steps */}
          <div className="space-y-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`relative p-6 rounded-2xl border-2 ${step.borderColor} ${step.bgColor} transition-all duration-500 ${
                  activeStep === index ? 'scale-105 shadow-2xl' : 'scale-100'
                }`}
                onHoverStart={() => setActiveStep(index)}
              >
                {/* Progress Ring */}
                <motion.div
                  className="absolute -top-4 -right-4 w-16 h-16"
                  initial={{ rotate: 0 }}
                  animate={{ rotate: activeStep === index ? 360 : 0 }}
                  transition={{ duration: 2, ease: "easeInOut" }}
                >
                  <svg className="w-full h-full transform -rotate-90">
                    <circle
                      cx="32"
                      cy="32"
                      r="28"
                      stroke="currentColor"
                      strokeWidth="4"
                      fill="none"
                      className="text-gray-300"
                    />
                    <motion.circle
                      cx="32"
                      cy="32"
                      r="28"
                      stroke="currentColor"
                      strokeWidth="4"
                      fill="none"
                      className={`${step.color.split(' ')[1].replace('to-', 'text-')}`}
                      strokeDasharray="176"
                      strokeDashoffset="176"
                      initial={{ strokeDashoffset: 176 }}
                      animate={{ strokeDashoffset: activeStep === index ? 176 - (176 * step.progress / 100) : 176 }}
                      transition={{ duration: 1.5, ease: "easeInOut" }}
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <step.icon className={`w-6 h-6 ${step.color.split(' ')[1].replace('to-', 'text-')}`} />
                  </div>
                </motion.div>

                <div className="flex items-start space-x-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${step.color} flex items-center justify-center flex-shrink-0`}>
                    <step.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-gray-600 mb-4">{step.text}</p>
                    
                    {/* Progress Bars */}
                    <div className="space-y-2">
                      {step.metrics.map((metric, idx) => (
                        <div key={metric.label} className="flex items-center space-x-2">
                          <span className="text-xs text-gray-500 w-16">{metric.label}</span>
                          <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                            <motion.div
                              className={`h-full ${metric.color} rounded-full`}
                              initial={{ width: 0 }}
                              animate={{ width: activeStep === index ? `${metric.value}%` : 0 }}
                              transition={{ duration: 1, delay: idx * 0.2 }}
                            />
                          </div>
                          <span className="text-xs font-medium text-gray-900 w-8">{metric.value}%</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Connection Line */}
                {index < steps.length - 1 && (
                  <motion.div
                    className="absolute left-1/2 -bottom-8 w-0.5 h-8 bg-gradient-to-b from-rose-800 to-red-800"
                    initial={{ height: 0 }}
                    animate={{ height: activeStep >= index ? 32 : 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  />
                )}
              </motion.div>
            ))}
          </div>

          {/* Animated Charts + Real Data Visualizations */}
          <div className="relative">
            {/* 3D Rotating Chart */}
            <motion.div
              className="relative w-80 h-80 mx-auto"
              animate={{ rotateY: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              {/* Pie Chart */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  className="w-64 h-64 rounded-full border-8 border-rose-800/20 relative"
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                >
                  <motion.div
                    className="absolute inset-0 rounded-full border-8 border-transparent border-t-red-800"
                    animate={{ rotate: [0, 180, 360] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                  />
                  <motion.div
                    className="absolute inset-0 rounded-full border-8 border-transparent border-b-amber-800"
                    animate={{ rotate: [0, -180, -360] }}
                    transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                  />
                  <motion.div
                    className="absolute inset-0 rounded-full border-8 border-transparent border-l-red-900"
                    animate={{ rotate: [0, 90, 180, 270, 360] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                  />
                </motion.div>
              </div>

              {/* Floating Metrics */}
              <motion.div
                className="absolute top-4 left-4 bg-white rounded-xl p-4 shadow-lg border border-gray-200"
                animate={{ 
                  y: [0, -10, 0],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="flex items-center space-x-2">
                  <TrendingUp className="w-4 h-4 text-rose-800" />
                  <span className="text-sm font-medium">+127%</span>
                </div>
                <p className="text-xs text-gray-600">Efficiency</p>
              </motion.div>

              <motion.div
                className="absolute top-4 right-4 bg-white rounded-xl p-4 shadow-lg border border-gray-200"
                animate={{ 
                  y: [0, 10, 0],
                  rotate: [0, -5, 5, 0]
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="flex items-center space-x-2">
                  <BarChart3 className="w-4 h-4 text-red-800" />
                  <span className="text-sm font-medium">98.5%</span>
                </div>
                <p className="text-xs text-gray-600">Success Rate</p>
              </motion.div>

              <motion.div
                className="absolute bottom-4 left-4 bg-white rounded-xl p-4 shadow-lg border border-gray-200"
                animate={{ 
                  x: [0, 10, 0],
                  rotate: [0, -3, 3, 0]
                }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="flex items-center space-x-2">
                  <Activity className="w-4 h-4 text-amber-800" />
                  <span className="text-sm font-medium">24/7</span>
                </div>
                <p className="text-xs text-gray-600">Monitoring</p>
              </motion.div>

              <motion.div
                className="absolute bottom-4 right-4 bg-white rounded-xl p-4 shadow-lg border border-gray-200"
                animate={{ 
                  x: [0, -10, 0],
                  rotate: [0, 3, -3, 0]
                }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-red-900" />
                  <span className="text-sm font-medium">100%</span>
                </div>
                <p className="text-xs text-gray-600">Quality</p>
              </motion.div>
            </motion.div>

            {/* Animated Data Points */}
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(20)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-rose-800 rounded-full"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    scale: [0, 1, 0],
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.1,
                  }}
                />
              ))}
            </div>

            {/* Charts Grid */}
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Velocity Line Chart */}
              <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm">
                <div className="text-sm font-medium text-gray-700 mb-2">Team Velocity</div>
                <ChartContainer
                  config={{
                    velocity: { label: 'Velocity', color: '#9d174d' },
                  }}
                  className="h-48"
                  style={{
                    width: '100%',
                    backgroundColor: 'white',
                  }}
                >
                  <LineChart data={velocityData} margin={{ left: 8, right: 8, top: 8, bottom: 8 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="sprint" tickLine={false} axisLine={false} />
                    <YAxis width={28} tickLine={false} axisLine={false} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Line type="monotone" dataKey="velocity" stroke="var(--color-velocity)" strokeWidth={2} dot={false} />
                  </LineChart>
                </ChartContainer>
              </div>

              {/* Allocation Bar Chart */}
              <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm">
                <div className="text-sm font-medium text-gray-700 mb-2">Resource Allocation (hrs)</div>
                <ChartContainer
                  config={{
                    hours: { label: 'Hours', color: '#991b1b' },
                  }}
                  className="h-48"
                  style={{
                    width: '100%',
                    backgroundColor: 'white',
                  }}
                >
                  <BarChart data={allocationData} margin={{ left: 8, right: 8, top: 8, bottom: 8 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" tickLine={false} axisLine={false} />
                    <YAxis width={32} tickLine={false} axisLine={false} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Bar dataKey="hours" fill="var(--color-hours)" radius={[6, 6, 0, 0]} />
                  </BarChart>
                </ChartContainer>
              </div>

              {/* Tasks Breakdown Pie Chart */}
              <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm">
                <div className="text-sm font-medium text-gray-700 mb-2">Tasks Breakdown</div>
                <ChartContainer config={{}} className="h-48"
                                  style={{
                                    width: '100%',
                                    backgroundColor: 'white',
                                  }}
                >
                  <PieChart>
                    <Pie
                      data={breakdownData}
                      dataKey="value"
                      nameKey="name"
                      cx="50%"
                      cy="50%"
                      innerRadius={28}
                      outerRadius={60}
                      stroke="#fff"
                      strokeWidth={2}
                      paddingAngle={2}
                    >
                      {breakdownData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <ChartLegend content={<ChartLegendContent />} />
                  </PieChart>
                </ChartContainer>
              </div>

              {/* Phase Completion Radial Bar */}
              <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm">
                <div className="text-sm font-medium text-gray-700 mb-2">Phase Completion</div>
                <ChartContainer config={{}} className="h-48"
                                  style={{
                                    width: '100%',
                                    backgroundColor: 'white',
                                  }}
                >
                  <RadialBarChart
                    innerRadius={20}
                    outerRadius={80}
                    data={radialData}
                    startAngle={90}
                    endAngle={-270}
                  >
                    <RadialBar dataKey="value" cornerRadius={6} />
                    <ChartLegend verticalAlign="bottom" content={<ChartLegendContent />} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                  </RadialBarChart>
                </ChartContainer>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {[
            { label: 'Projects Completed', value: '150+', icon: CheckCircle, color: 'text-rose-800' },
            { label: 'Client Satisfaction', value: '98%', icon: Star, color: 'text-amber-800' },
            { label: 'Team Members', value: '25+', icon: Users, color: 'text-red-800' },
            { label: 'Years Experience', value: '8+', icon: Award, color: 'text-red-900' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="bg-white rounded-xl p-6 text-center border border-gray-200 hover-lift shadow-sm"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <stat.icon className={`w-8 h-8 mx-auto mb-3 ${stat.color}`} />
              <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessSection;
