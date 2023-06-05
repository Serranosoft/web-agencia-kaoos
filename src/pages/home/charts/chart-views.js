import { CartesianGrid, XAxis, YAxis, ResponsiveContainer, AreaChart, Tooltip, Area, Legend } from 'recharts';
import Text from '@/components/content/text';
import styles from '@/styles/home/charts/chart.module.scss'
import Highlight from '@/components/content/highlight';

export default function Chart({ color, data }) {

    const CustomTooltip = ({ active, payload, label }) => {
        if (active && payload && payload.length) {
            return (
                <div className={styles.customTooltip}>
                    <Text>
                        Durante el
                        <Highlight> {label} </Highlight>
                        ha recibido una cantidad de
                        <Highlight> {payload[0].value} </Highlight>
                        visitas
                    </Text>
                </div>
            );
        }
        return null;
    };


    return (
        <div className={styles.root}>
            <ResponsiveContainer width="99.9%" height={400}>
                <AreaChart
                    data={data}
                    margin={{
                        top: 10,
                        right: 30,
                        left: 0,
                        bottom: 0,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip content={<CustomTooltip />} />
                    <Area type="monotone" dataKey="visitas" stroke={`${color ? color : '#8884d8'}`} fill={`${color ? color : '#8884d8'}`} />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    )
}