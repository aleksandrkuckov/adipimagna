interface ChartDescriptor {
  type: string;
  title: string;
  xAxes: AxisDescriptor[];
  yAxes: AxisDescriptor[];
  data: any[];
}
