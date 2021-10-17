import Container from 'components/Navegation/container';

import CardStats from "components/Cards/CardStats.js";
import CardLineChart from 'components/Cards/CardLineChart';
import CardTraffic from 'components/Cards/CardSocialTraffic';

import { FaBusAlt, FaUsers } from 'react-icons/fa'
import { MdReportProblem } from 'react-icons/md';


const Dashboard = () => {
    return (
        <Container>
            {/* Header */}
            <div className="py-4 pb-6">

                {/* Card stats */}
                <div className="flex flex-wrap justify-end space-y-1">

                    <div className="w-full lg:w-6/12 xl:w-3/12 px-4 py-1">
                        <CardStats
                            statSubtitle="Autobuses"
                            statTitle="999"
                            statArrow="up"
                            statPercent="3.48"
                            statPercentColor="text-blue-500"
                            statDescripiron="Since last month"
                            statIconName={<FaBusAlt className='animate-bounce' />}
                            statIconColor="bg-orange-500"
                        />
                    </div>

                    <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                        <CardStats
                            statSubtitle="Usuarios"
                            statTitle="924"
                            statArrow="down"
                            statPercent="1.10"
                            statPercentColor="text-red-500"
                            statDescripiron="Since yesterday"
                            statIconName={<FaUsers className='animate-bounce' />}
                            statIconColor="bg-green-500"
                        />
                    </div>
                    <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                        <CardStats
                            statSubtitle="Reportes"
                            statTitle="49,65%"
                            statArrow="up"
                            statPercent="12"
                            statPercentColor="text-blue-500"
                            statDescripiron="Since last month"
                            statIconName={<MdReportProblem className='animate-bounce' />}
                            statIconColor="bg-red-500"
                        />
                    </div>
                </div>
            </div>
            <div className='flex flex-wrap items-center mt-2 '>
                <CardLineChart />
                <CardTraffic />
            </div>
        </Container>
    );
}
export default Dashboard;