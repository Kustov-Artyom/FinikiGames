import PromoCodeBanner from "../components/ui/PromoCodeBanner/PromoCodeBanner";
import PromoCodeList, { PromoCodeItem } from "../components/ui/PromoCodeList/PromoCodeList";




export default function Rewards() {
    const promoCodes: PromoCodeItem[] = [
    { id: 'p1', date: '00.00.0000', time: '00:00' },
    { id: 'p2', date: '01.01.2030', time: '12:30' },
  ]

    return <>
        return <PromoCodeList items={promoCodes} />
    </>
}