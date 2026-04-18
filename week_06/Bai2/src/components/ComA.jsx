import { useRecoilValue } from 'recoil';
import { counterAtom } from "../state/atoms";

export default function CompA() {
    const count = useRecoilValue(counterAtom);
    
    return (
        <div>
            <h3>Component A (Display)</h3>
            <p>Giá trị Count: <strong style={{ fontSize: '1.5rem' }}>{count}</strong></p>
        </div>
    );
}