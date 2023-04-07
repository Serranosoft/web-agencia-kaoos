import { CartesianGrid, XAxis, YAxis, ResponsiveContainer, AreaChart, Tooltip, Area, Legend } from 'recharts';
import Text from './text';
import styles from '@/styles/chart.module.scss'
import Highlight from './highlight';

export default function Chart({ title, data }) {

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
            <Text>{title}</Text>
            <Text>Cantidad de visitas por mes durante los años 2022 y 2023</Text>
            <ResponsiveContainer width="100%" height={350}>
                <AreaChart
                    width={500}
                    height={400}
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
                    <Area type="monotone" dataKey="visitas" stroke="#8884d8" fill="#8884d8" />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    )
}