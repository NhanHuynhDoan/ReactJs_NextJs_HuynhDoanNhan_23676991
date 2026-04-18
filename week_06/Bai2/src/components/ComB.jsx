import { useSetRecoilState } from 'recoil';
import { counterAtom } from "../state/atoms";

export default function ComB() {
    const setCount = useSetRecoilState(counterAtom);

    return (
        <div>
            <h3>Component B (Controls)</h3>
            <button onClick={() => setCount(prev => prev + 1)}>Tăng (+)</button>
            <button onClick={() => setCount(prev => (prev > 0 ? prev - 1 : 0))} style={{ marginLeft: '10px' }}>
                Giảm (-)
            </button>
        </div>
    );
}