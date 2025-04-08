import { View } from "react-native";
import { CartesianChart, Line } from "victory-native";
import { useFont } from "@shopify/react-native-skia";
// 👇 import a font file you'd like to use for tick labels

export default function MyChart() {
  const font = useFont(12);

  return (
    <View style={{ height: 300, width: '90%', backgroundColor: '#0000' }}>
      <CartesianChart
        data={DATA} // 👈 specify your data
        xKey="day" // 👈 specify data key for x-axis
        yKeys={["lowTmp", "highTmp"]} // 👈 specify data keys used for y-axis
        axisOptions={{ font }} // 👈 we'll generate axis labels using given font.
        
      >
        {/* 👇 render function exposes various data, such as points. */}
        {({ points }) => (
<>          
<Line points={points.highTmp} color="red" strokeWidth={3} />
<Line points={points.lowTmp} color="green" strokeWidth={3} />
          </>
        )}
      </CartesianChart>
    </View>
  );
}

const DATA = Array.from({ length: 31 }, (_, i) => ({
  day: i,
  lowTmp: 20 + 10 * Math.random(),
  highTmp: 40 + 30 * Math.random(),
}));