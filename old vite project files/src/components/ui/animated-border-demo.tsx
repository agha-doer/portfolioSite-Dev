import { Card } from '@/components/ui/card';
import AnimatedBorder from './animated-border';

const AnimatedBorderDemo = () => {
  return (
    <div className="p-8 space-y-8">
      <h2 className="text-2xl font-bold text-white mb-6">Animated Border Examples</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Default Theme Colors */}
        <AnimatedBorder 
          className="h-32"
          topColor="rosewood-400"
          rightColor="carmine-400"
          bottomColor="auburn-400"
          leftColor="burgundy-400"
        >
          <Card className="h-full bg-gray-800 border-0 p-4">
            <h3 className="text-white font-semibold">Default Theme</h3>
            <p className="text-gray-300 text-sm">Rosewood, Carmine, Auburn, Burgundy</p>
          </Card>
        </AnimatedBorder>

        {/* Cardinal Theme */}
        <AnimatedBorder 
          className="h-32"
          topColor="cardinal-400"
          rightColor="rosewood-400"
          bottomColor="carmine-400"
          leftColor="auburn-400"
          delay={0.5}
        >
          <Card className="h-full bg-gray-800 border-0 p-4">
            <h3 className="text-white font-semibold">Cardinal Theme</h3>
            <p className="text-gray-300 text-sm">Cardinal, Rosewood, Carmine, Auburn</p>
          </Card>
        </AnimatedBorder>

        {/* Auburn Theme */}
        <AnimatedBorder 
          className="h-32"
          topColor="auburn-400"
          rightColor="burgundy-400"
          bottomColor="cardinal-400"
          leftColor="rosewood-400"
          delay={1}
        >
          <Card className="h-full bg-gray-800 border-0 p-4">
            <h3 className="text-white font-semibold">Auburn Theme</h3>
            <p className="text-gray-300 text-sm">Auburn, Burgundy, Cardinal, Rosewood</p>
          </Card>
        </AnimatedBorder>

        {/* Burgundy Theme */}
        <AnimatedBorder 
          className="h-32"
          topColor="burgundy-400"
          rightColor="auburn-400"
          bottomColor="rosewood-400"
          leftColor="carmine-400"
          delay={1.5}
        >
          <Card className="h-full bg-gray-800 border-0 p-4">
            <h3 className="text-white font-semibold">Burgundy Theme</h3>
            <p className="text-gray-300 text-sm">Burgundy, Auburn, Rosewood, Carmine</p>
          </Card>
        </AnimatedBorder>

        {/* Carmine Theme */}
        <AnimatedBorder 
          className="h-32"
          topColor="carmine-400"
          rightColor="cardinal-400"
          bottomColor="burgundy-400"
          leftColor="auburn-400"
          delay={2}
        >
          <Card className="h-full bg-gray-800 border-0 p-4">
            <h3 className="text-white font-semibold">Carmine Theme</h3>
            <p className="text-gray-300 text-sm">Carmine, Cardinal, Burgundy, Auburn</p>
          </Card>
        </AnimatedBorder>

        {/* Rosewood Theme */}
        <AnimatedBorder 
          className="h-32"
          topColor="rosewood-400"
          rightColor="auburn-400"
          bottomColor="carmine-400"
          leftColor="cardinal-400"
          delay={2.5}
        >
          <Card className="h-full bg-gray-800 border-0 p-4">
            <h3 className="text-white font-semibold">Rosewood Theme</h3>
            <p className="text-gray-300 text-sm">Rosewood, Auburn, Carmine, Cardinal</p>
          </Card>
        </AnimatedBorder>
      </div>
    </div>
  );
};

export default AnimatedBorderDemo;
