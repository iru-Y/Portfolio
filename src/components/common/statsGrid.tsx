interface StatItem{
    value: string;
    label: string;
}

interface StatsGridProps{
    items: StatItem[];
    className?: string;
}

export function StatsGrid({items, className=""}: StatsGridProps){
    return(
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-8 text-center ${className}`}>
            {items.map((item, index)=>(
                <div key={index}
                     className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 hover:border-neon/30 transition-colors"
                >
                    <div className="text-3xl font-bold text-neon mb-2">{item.value}</div>
                    <div className="text-muted-foreground text-sm">{item.label}</div>
                </div>
            ))}
        </div>
    )
}