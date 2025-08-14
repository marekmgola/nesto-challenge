

const Spacer = ({ height = 12 | 16 | 24 | 32 | 40 | 48 | 56 | 64 | 72 | 80 | 88 | 96 }: { height?: number }) => {
    return <div style={{ height: `${height}px` }} />
}

export default Spacer