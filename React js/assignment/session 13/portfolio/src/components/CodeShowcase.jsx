import React, { useState } from 'react';
import { Code, Copy, Check, Terminal, Sparkles } from 'lucide-react';

function CodeShowcase() {
  const [activeTab, setActiveTab] = useState('react');
  const [copied, setCopied] = useState(false);

  const snippets = {
    react: {
      title: 'React Custom Hook (useFetchStore)',
      language: 'jsx',
      filename: 'hooks/useFetchStore.js',
      description: 'Custom React 19 hook featuring dynamic caching, async state handling, and strict error recovery.',
      code: `import { useState, useEffect, useCallback } from 'react';

export function useFetchStore(endpoint, options = {}) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(endpoint, options);
      if (!response.ok) throw new Error(\`HTTP error! status: \${response.status}\`);
      const result = await response.json();
      setData(result);
    } catch (err) {
      setError(err.message || 'Failed to retrieve dataset');
    } finally {
      setLoading(false);
    }
  }, [endpoint]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, loading, error, refetch: fetchData };
}`
    },
    django: {
      title: 'Django REST API ViewSet',
      language: 'python',
      filename: 'api/views.py',
      description: 'Production-ready Django REST Framework ViewSet with permission scoping & query optimization.',
      code: `from rest_framework import viewsets, permissions, status
from rest_framework.response import Response
from rest_framework.decorators import action
from .models import OrderItem, Product
from .serializers import OrderItemSerializer

class OrderViewSet(viewsets.ModelViewSet):
    """
    Optimized API endpoint for real-time inventory & order management.
    """
    serializer_class = OrderItemSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        # Prefetch related objects to avoid N+1 database queries
        return OrderItem.objects.select_related('product', 'user')\\
                                .filter(user=self.request.user)\\
                                .order_by('-created_at')

    @action(detail=True, methods=['post'])
    def process_dispatch(self, request, pk=None):
        order = self.get_object()
        order.status = 'DISPATCHED'
        order.save()
        return Response({'status': 'Order dispatched successfully'}, status=status.HTTP_200_OK)`
    },
    sql: {
      title: 'MySQL Query & Schema Optimization',
      language: 'sql',
      filename: 'db/migrations/004_indexes.sql',
      description: 'Indexed relational query for high-performance aggregate reporting and stock analytics.',
      code: `-- High Performance Sales & Stock Aggregation Query
SELECT 
    p.category_name,
    COUNT(o.id) AS total_orders,
    SUM(o.quantity * o.unit_price) AS net_revenue,
    AVG(o.delivery_time_hours) AS avg_delivery_hrs
FROM products p
INNER JOIN order_items o ON p.id = o.product_id
WHERE o.created_at >= DATE_SUB(NOW(), INTERVAL 30 DAY)
  AND o.payment_status = 'COMPLETED'
GROUP BY p.category_name
ORDER BY net_revenue DESC
LIMIT 10;`
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(snippets[activeTab].code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="craftsmanship" className="py-24 relative z-10">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col items-center mb-16 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" /> Code Architecture
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
            Code <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400">Craftsmanship</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full"></div>
          <p className="mt-6 text-gray-400 max-w-2xl text-lg font-light">
            I write clean, modular, and maintainable code adhering to modern design patterns and performance standards.
          </p>
        </div>

        {/* Code Showcase Container */}
        <div className="glass-card rounded-2xl border border-gray-800/80 shadow-2xl overflow-hidden backdrop-blur-xl">
          
          {/* Top Bar Tabs & Actions */}
          <div className="bg-gray-950/90 px-6 py-4 border-b border-gray-800/80 flex flex-wrap items-center justify-between gap-4">
            
            {/* Terminal Window Dots + Filename */}
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block"></span>
                <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
                <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
              </div>
              <span className="text-xs font-mono text-gray-400 border-l border-gray-800 pl-3 flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                {snippets[activeTab].filename}
              </span>
            </div>

            {/* Language Selector Buttons */}
            <div className="flex items-center gap-2 bg-gray-900/90 p-1 rounded-xl border border-gray-800">
              <button
                onClick={() => setActiveTab('react')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 ${
                  activeTab === 'react' 
                    ? 'bg-blue-600 text-white shadow-md' 
                    : 'text-gray-400 hover:text-gray-200 hover:bg-gray-800/50'
                }`}
              >
                React
              </button>
              <button
                onClick={() => setActiveTab('django')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 ${
                  activeTab === 'django' 
                    ? 'bg-blue-600 text-white shadow-md' 
                    : 'text-gray-400 hover:text-gray-200 hover:bg-gray-800/50'
                }`}
              >
                Django REST
              </button>
              <button
                onClick={() => setActiveTab('sql')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 ${
                  activeTab === 'sql' 
                    ? 'bg-blue-600 text-white shadow-md' 
                    : 'text-gray-400 hover:text-gray-200 hover:bg-gray-800/50'
                }`}
              >
                MySQL
              </button>
            </div>

            {/* Copy Button */}
            <button
              onClick={handleCopy}
              className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-gray-900 border border-gray-800 text-gray-300 hover:text-white hover:border-gray-700 transition-all text-xs font-medium active:scale-95"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400 font-semibold">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy Code</span>
                </>
              )}
            </button>

          </div>

          {/* Description Sub-banner */}
          <div className="bg-gray-900/40 px-6 py-3 border-b border-gray-800/50 flex items-center gap-2 text-xs text-gray-400">
            <Code className="w-4 h-4 text-cyan-400 shrink-0" />
            <span>{snippets[activeTab].description}</span>
          </div>

          {/* Code Viewer Box */}
          <div className="p-6 overflow-x-auto bg-gray-950/80 font-mono text-sm leading-relaxed text-gray-300">
            <pre>
              <code>{snippets[activeTab].code}</code>
            </pre>
          </div>

        </div>

      </div>
    </section>
  );
}

export default CodeShowcase;
