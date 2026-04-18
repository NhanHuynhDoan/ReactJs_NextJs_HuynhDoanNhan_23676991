import { useSetRecoilState } from 'recoil';
import { counterState } from '../state/counterAtom';

export default function ComB() {
    const setCount = useSetRecoilState(counterState);
    return (
        <div>
            <h3>Component B</h3>
            <button onClick={() => setCount(prev => prev + 1)}>Tăng (+)</button>
            <button onClick={() => setCount(prev => (prev > 0 ? prev - 1 : 0))}>Giảm (-)</button>
        </div>
    );
}