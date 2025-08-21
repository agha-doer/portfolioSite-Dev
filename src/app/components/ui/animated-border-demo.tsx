import { Card } from './card';
import AnimatedBorder from './animated-border';

const AnimatedBorderDemo = () => {
  return (
    <div className="p-8 space-y-8">
      <h2 className="text-2xl font-bold text-white mb-6">Animated Border Examples</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Default Theme Colors */}
                <AnimatedBorder
          className="h-32"
          gradientTop="linear-gradient(90deg, #9d174d, #991b1b)"
          gradientRight="linear-gradient(180deg, #991b1b, #92400e)"
          gradientBottom="linear-gradient(90deg, #92400e, #dc2626)"
          gradientLeft="linear-gradient(180deg, #dc2626, #9d174d)"
          duration={4}
        >
          <Card className="h-full bg-gray-800 border-0 p-4">
            <h3 className="text-white font-semibold">Default Theme</h3>
            <p className="text-gray-300 text-sm">Rosewood, Carmine, Auburn, Burgundy</p>
          </Card>
        </AnimatedBorder>

        {/* Cardinal Theme */}
        <AnimatedBorder 
          className="h-32"
          gradientTop="linear-gradient(90deg, #7f1d1d, #9d174d)"
          gradientRight="linear-gradient(180deg, #9d174d, #991b1b)"
          gradientBottom="linear-gradient(90deg, #991b1b, #92400e)"
          gradientLeft="linear-gradient(180deg, #92400e, #7f1d1d)"
          duration={4.5}
        >
          <Card className="h-full bg-gray-800 border-0 p-4">
            <h3 className="text-white font-semibold">Cardinal Theme</h3>
            <p className="text-gray-300 text-sm">Cardinal, Rosewood, Carmine, Auburn</p>
          </Card>
        </AnimatedBorder>

        {/* Auburn Theme */}
        <AnimatedBorder 
          className="h-32"
          gradientTop="linear-gradient(90deg, #92400e, #991b1b)"
          gradientRight="linear-gradient(180deg, #991b1b, #9d174d)"
          gradientBottom="linear-gradient(90deg, #9d174d, #7f1d1d)"
          gradientLeft="linear-gradient(180deg, #7f1d1d, #92400e)"
          duration={5}
        >
          <Card className="h-full bg-gray-800 border-0 p-4">
            <h3 className="text-white font-semibold">Auburn Theme</h3>
            <p className="text-gray-300 text-sm">Auburn, Burgundy, Cardinal, Rosewood</p>
          </Card>
        </AnimatedBorder>

        {/* Burgundy Theme */}
        <AnimatedBorder 
          className="h-32"
          gradientTop="linear-gradient(90deg, #991b1b, #92400e)"
          gradientRight="linear-gradient(180deg, #92400e, #9d174d)"
          gradientBottom="linear-gradient(90deg, #9d174d, #991b1b)"
          gradientLeft="linear-gradient(180deg, #991b1b, #991b1b)"
          duration={5.5}
        >
          <Card className="h-full bg-gray-800 border-0 p-4">
            <h3 className="text-white font-semibold">Burgundy Theme</h3>
            <p className="text-gray-300 text-sm">Burgundy, Auburn, Rosewood, Carmine</p>
          </Card>
        </AnimatedBorder>

        {/* Carmine Theme */}
        <AnimatedBorder 
          className="h-32"
          gradientTop="linear-gradient(90deg, #991b1b, #7f1d1d)"
          gradientRight="linear-gradient(180deg, #7f1d1d, #991b1b)"
          gradientBottom="linear-gradient(90deg, #991b1b, #92400e)"
          gradientLeft="linear-gradient(180deg, #92400e, #991b1b)"
          duration={6}
        >
          <Card className="h-full bg-gray-800 border-0 p-4">
            <h3 className="text-white font-semibold">Carmine Theme</h3>
            <p className="text-gray-300 text-sm">Carmine, Cardinal, Burgundy, Auburn</p>
          </Card>
        </AnimatedBorder>

        {/* Rosewood Theme */}
        <AnimatedBorder 
          className="h-32"
          gradientTop="linear-gradient(90deg, #9d174d, #92400e)"
          gradientRight="linear-gradient(180deg, #92400e, #991b1b)"
          gradientBottom="linear-gradient(90deg, #991b1b, #7f1d1d)"
          gradientLeft="linear-gradient(180deg, #7f1d1d, #9d174d)"
          duration={6.5}
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
