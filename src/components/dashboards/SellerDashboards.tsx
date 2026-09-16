import React from 'react';
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
import type { PlatformDetail } from '../../types';
import { TrendingUp } from 'lucide-react';

interface SellerDashboardProps {
  platformDetail: PlatformDetail;
}

export const SellerDashboard: React.FC<SellerDashboardProps> = ({ platformDetail }) => {
  const { platform, metrics, chartData, tableData, storeBanner } = platformDetail;

  return (
    <div className="bg-slate-900 rounded-3xl p-4 sm:p-6 text-white shadow-2xl border border-slate-800 space-y-6">
      
      {/* Monitor Header Frame */}
      <div className="flex items-center justify-between border-b border-slate-800 pb-4">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-rose-500" />
          <div className="w-3 h-3 rounded-full bg-amber-500" />
          <div className="w-3 h-3 rounded-full bg-emerald-500" />
          <span className="ml-2 text-xs font-mono text-slate-400">seller-center.internal/{platform.toLowerCase()}</span>
        </div>
        <div className="px-3 py-1 rounded-full bg-teal-500/20 text-teal-400 text-xs font-bold border border-teal-500/30">
          Live Data Preview
        </div>
      </div>

      {/* Store Banner Mockup if available */}
      {storeBanner && (
        <div className="rounded-2xl overflow-hidden border border-slate-700 bg-linear-to-r from-teal-900 to-slate-900 p-6 relative">
          <div className="max-w-xl space-y-2 relative z-10">
            <span className="px-3 py-1 rounded-full bg-amber-500 text-slate-950 text-xs font-black uppercase">
              {storeBanner.discountTag || 'PROMO 12.12 CRAZY SALE'}
            </span>
            <h4 className="text-2xl sm:text-3xl font-black text-white">{storeBanner.title}</h4>
            <p className="text-sm text-slate-300">{storeBanner.subtitle}</p>
          </div>

          {storeBanner.items && storeBanner.items.length > 0 && (
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-6 relative z-10">
              {storeBanner.items.map((item, idx) => (
                <div key={idx} className="bg-slate-950/80 p-3 rounded-xl border border-slate-800 space-y-1">
                  <div className="text-xs font-bold text-slate-200 truncate">{item.name}</div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs line-through text-slate-500">{item.originalPrice}</span>
                    <span className="text-sm font-black text-emerald-400">{item.discountPrice}</span>
                  </div>
                  <span className="text-[10px] bg-rose-500/20 text-rose-300 px-1.5 py-0.5 rounded font-bold inline-block">
                    {item.discountTag}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Key Metric Cards */}
      {metrics && metrics.length > 0 && (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {metrics.map((metric, idx) => (
            <div key={idx} className="bg-slate-800/80 p-4 rounded-2xl border border-slate-700 space-y-1">
              <span className="text-xs text-slate-400 font-medium block truncate">{metric.label}</span>
              <div className="text-xl sm:text-2xl font-black text-white">{metric.value}</div>
              {metric.change && (
                <div className={`text-xs font-bold flex items-center gap-1 ${
                  metric.isPositive ? 'text-emerald-400' : 'text-rose-400'
                }`}>
                  <TrendingUp className="w-3.5 h-3.5" />
                  <span>{metric.change} vs prev month</span>
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Chart Visualization if available */}
      {chartData && chartData.length > 0 && (
        <div className="bg-slate-800/50 p-4 rounded-2xl border border-slate-700/60 space-y-3">
          <div className="flex items-center justify-between">
            <h5 className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Trend Chart Performance Analytics
            </h5>
            <span className="text-[11px] text-teal-400 font-mono">Monthly Data Period</span>
          </div>

          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={chartData}>
                <defs>
                  <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#0f969c" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#0f969c" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                <XAxis dataKey={chartData[0].day ? 'day' : chartData[0].date ? 'date' : 'day'} stroke="#94a3b8" fontSize={11} />
                <YAxis stroke="#94a3b8" fontSize={11} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', borderRadius: '12px' }}
                  labelStyle={{ color: '#94a3b8' }}
                />
                <Area type="monotone" dataKey={chartData[0].sales ? 'sales' : chartData[0].impressions ? 'impressions' : chartData[0].gmv ? 'gmv' : 'expense'} stroke="#0f969c" fillOpacity={1} fill="url(#colorSales)" strokeWidth={3} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      )}

      {/* Table Data if available */}
      {tableData && tableData.length > 0 && (
        <div className="overflow-x-auto rounded-2xl border border-slate-800">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-800 text-slate-300 font-bold uppercase text-[10px]">
              <tr>
                <th className="p-3">Fitur Promosi</th>
                <th className="p-3">Potensi Penjualan</th>
                <th className="p-3">Estimasi Pengeluaran</th>
                <th className="p-3">Pesanan Baru</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800">
              {tableData.map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-800/50 transition-colors">
                  <td className="p-3 font-semibold text-white">{row.feature}</td>
                  <td className="p-3 text-emerald-400 font-bold">{row.sales}</td>
                  <td className="p-3 text-slate-300">{row.expense}</td>
                  <td className="p-3 font-bold text-amber-400">{row.orders}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

    </div>
  );
};
