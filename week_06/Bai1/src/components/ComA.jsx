import { useRecoilValue } from 'recoil';
import { counterState } from '../state/counterAtom';

export default function CompA() {
    const count = useRecoilValue(counterState);
    return (
        <div>
            <h3>Component A</h3>
            <p>Giá trị Count hiện tại: <strong>{count}</strong></p>
        </div>
    );
}