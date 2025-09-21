import React, { useState, useEffect } from 'react';
import { invoke } from '@forge/bridge';

interface UserOrderRow {
  userId: number;
  userName: string;
  productId: number | null;
  product?: string | null;
  sleep: number;
}

interface NewUserOrder {
  userId?: number;
  userName: string;
  productId?: number;
  product: string;
}

interface QueryResult {
  rows: UserOrderRow[];
  times: number;
}

interface PerformanceAnalysisResult {
  success: boolean;
  window: string;
  top: number;
  warnThresholdMs: number;
  memoryThresholdBytes: number;
  rows: Array<{
    rank: number;
    digest: string;
    stmtType: string;
    schemaName: string;
    execCount: string;
    avgLatencyMs: number;
    maxLatencyMs: number;
    minLatencyMs: number;
    avgProcessTimeMs: number;
    avgWaitTimeMs: number;
    avgBackoffTimeMs: number;
    avgMemMB: number;
    maxMemMB: number;
    avgMemBytes: number;
    maxMemBytes: number;
    avgTotalKeys: number;
    firstSeen: string;
    lastSeen: string;
    planInCache: number;
    planCacheHits: string;
    digestText: string;
    plan: string;
  }>;
  generatedAt: string;
}

const App: React.FC = () => {
  const [queryResult, setQueryResult] = useState<QueryResult | null>(null);
  const [performanceResult, setPerformanceResult] = useState<PerformanceAnalysisResult | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState<NewUserOrder>({
    userName: '',
    product: ''
  });

  const executeQuery = async (cacheable: boolean) => {
    setLoading(true);
    setError(null);
    
    try {
      const result = await invoke<QueryResult>('fetch', { cacheable });
      setQueryResult(result);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error occurred');
    } finally {
      setLoading(false);
    }
  };

  const insertUserOrder = async () => {
    if (!formData.userName.trim() || !formData.product.trim()) {
      setError('Please fill in all fields');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      await invoke('insertUserOrOrder', formData);
      setError(null);
      // Clear form after successful insert
      setFormData({
        userName: '',
        product: ''
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to insert user/order');
    } finally {
      setLoading(false);
    }
  };

  const clearCache = async () => {
    setLoading(true);
    setError(null);

    try {
      await invoke('clearCache');
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to clear cache');
    } finally {
      setLoading(false);
    }
  };

  const runPerformanceAnalysis = async () => {
    setLoading(true);
    setError(null);

    try {
      const result = await invoke<PerformanceAnalysisResult>('runPerformanceAnalyze');
      setPerformanceResult(result);
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to run performance analysis');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', maxWidth: '1200px', margin: '0 auto' }}>
      <h1 style={{ color: '#0052CC', marginBottom: '30px' }}>
        🚀 Forge SQL ORM Cache Demo
      </h1>

      {/* Query Performance Section */}
      <div style={{ marginBottom: '40px', padding: '20px', border: '1px solid #ddd', borderRadius: '8px' }}>
        <h2 style={{ color: '#172B4D', marginBottom: '20px' }}>Query Performance Test</h2>
        <p style={{ color: '#6B778C', marginBottom: '20px' }}>
          Test the difference between cached and non-cached queries. Both queries include a 1-second sleep to demonstrate the performance difference.
        </p>
        
        <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
          <button
            onClick={() => executeQuery(false)}
            disabled={loading}
            style={{
              padding: '10px 20px',
              backgroundColor: '#FF5630',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: loading ? 'not-allowed' : 'pointer',
              opacity: loading ? 0.6 : 1
            }}
          >
            {loading ? 'Loading...' : '🚫 Non-Cached Query'}
          </button>
          
          <button
            onClick={() => executeQuery(true)}
            disabled={loading}
            style={{
              padding: '10px 20px',
              backgroundColor: '#36B37E',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: loading ? 'not-allowed' : 'pointer',
              opacity: loading ? 0.6 : 1
            }}
          >
            {loading ? 'Loading...' : '✅ Cached Query'}
          </button>
        </div>

        {queryResult && (
          <div style={{ 
            padding: '15px', 
            backgroundColor: '#F4F5F7', 
            borderRadius: '4px',
            marginTop: '10px'
          }}>
            <h3 style={{ margin: '0 0 10px 0', color: '#172B4D' }}>
              Query Results ({queryResult.times}ms)
            </h3>
            <div style={{ fontSize: '14px', color: '#6B778C', marginBottom: '10px' }}>
              Found {queryResult.rows.length} records
            </div>
            <div style={{ maxHeight: '200px', overflowY: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                  <tr style={{ backgroundColor: '#E9ECF0' }}>
                    <th style={{ padding: '8px', textAlign: 'left', border: '1px solid #ddd' }}>User ID</th>
                    <th style={{ padding: '8px', textAlign: 'left', border: '1px solid #ddd' }}>User Name</th>
                    <th style={{ padding: '8px', textAlign: 'left', border: '1px solid #ddd' }}>Product</th>
                    <th style={{ padding: '8px', textAlign: 'left', border: '1px solid #ddd' }}>Product ID</th>
                  </tr>
                </thead>
                <tbody>
                  {queryResult.rows.map((row, index) => (
                    <tr key={index}>
                      <td style={{ padding: '8px', border: '1px solid #ddd' }}>{row.userId}</td>
                      <td style={{ padding: '8px', border: '1px solid #ddd' }}>{row.userName}</td>
                      <td style={{ padding: '8px', border: '1px solid #ddd' }}>{row.product || 'N/A'}</td>
                      <td style={{ padding: '8px', border: '1px solid #ddd' }}>{row.productId || 'N/A'}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>

      {/* User/Order Management Section */}
      <div style={{ marginBottom: '40px', padding: '20px', border: '1px solid #ddd', borderRadius: '8px' }}>
        <h2 style={{ color: '#172B4D', marginBottom: '20px' }}>Add User & Order</h2>
        <p style={{ color: '#6B778C', marginBottom: '20px' }}>
          Add a new user and order. User ID and Product ID are optional - they will be auto-generated if not provided. The system will automatically match existing users and clear cache after operations.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginBottom: '20px' }}>
          <div>
            <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold', color: '#172B4D' }}>
              User ID (optional):
            </label>
            <input
              type="number"
              value={formData.userId || ''}
              onChange={(e) => setFormData({ ...formData, userId: e.target.value ? parseInt(e.target.value) : undefined })}
              placeholder="Leave empty for auto-generated"
              style={{
                width: '100%',
                padding: '8px',
                border: '1px solid #ddd',
                borderRadius: '4px',
                fontSize: '14px'
              }}
            />
          </div>

          <div>
            <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold', color: '#172B4D' }}>
              User Name:
            </label>
            <input
              type="text"
              value={formData.userName}
              onChange={(e) => setFormData({ ...formData, userName: e.target.value })}
              placeholder="Enter user name"
              style={{
                width: '100%',
                padding: '8px',
                border: '1px solid #ddd',
                borderRadius: '4px',
                fontSize: '14px'
              }}
            />
          </div>

          <div>
            <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold', color: '#172B4D' }}>
              Product ID (optional):
            </label>
            <input
              type="number"
              value={formData.productId || ''}
              onChange={(e) => setFormData({ ...formData, productId: e.target.value ? parseInt(e.target.value) : undefined })}
              placeholder="Leave empty for auto-generated"
              style={{
                width: '100%',
                padding: '8px',
                border: '1px solid #ddd',
                borderRadius: '4px',
                fontSize: '14px'
              }}
            />
          </div>

          <div>
            <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold', color: '#172B4D' }}>
              Product:
            </label>
            <input
              type="text"
              value={formData.product}
              onChange={(e) => setFormData({ ...formData, product: e.target.value })}
              placeholder="Enter product name"
              style={{
                width: '100%',
                padding: '8px',
                border: '1px solid #ddd',
                borderRadius: '4px',
                fontSize: '14px'
              }}
            />
          </div>
        </div>

        <button
          onClick={insertUserOrder}
          disabled={loading}
          style={{
            padding: '12px 24px',
            backgroundColor: '#0052CC',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: loading ? 'not-allowed' : 'pointer',
            opacity: loading ? 0.6 : 1,
            fontSize: '16px',
            fontWeight: 'bold'
          }}
        >
          {loading ? 'Processing...' : '➕ Add User & Order'}
        </button>
      </div>

      {/* Cache Management Section */}
      <div style={{ marginBottom: '40px', padding: '20px', border: '1px solid #ddd', borderRadius: '8px' }}>
        <h2 style={{ color: '#172B4D', marginBottom: '20px' }}>Cache Management</h2>
        <p style={{ color: '#6B778C', marginBottom: '20px' }}>
          Manage the cache and run performance analysis.
        </p>

        <div style={{ display: 'flex', gap: '10px' }}>
          <button
            onClick={clearCache}
            disabled={loading}
            style={{
              padding: '10px 20px',
              backgroundColor: '#FF5630',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: loading ? 'not-allowed' : 'pointer',
              opacity: loading ? 0.6 : 1
            }}
          >
            {loading ? 'Loading...' : '🗑️ Clear Cache'}
          </button>

          <button
            onClick={runPerformanceAnalysis}
            disabled={loading}
            style={{
              padding: '10px 20px',
              backgroundColor: '#FF8B00',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: loading ? 'not-allowed' : 'pointer',
              opacity: loading ? 0.6 : 1
            }}
          >
            {loading ? 'Loading...' : '📊 Run Performance Analysis'}
          </button>
        </div>
      </div>

      {/* Performance Analysis Results */}
      {performanceResult && (
        <div style={{ marginBottom: '40px', padding: '20px', border: '1px solid #ddd', borderRadius: '8px' }}>
          <h2 style={{ color: '#172B4D', marginBottom: '20px' }}>Performance Analysis Results</h2>
          <div style={{ 
            padding: '15px', 
            backgroundColor: '#F4F5F7', 
            borderRadius: '4px',
            marginBottom: '20px'
          }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '15px', marginBottom: '20px' }}>
              <div>
                <strong>Window:</strong> {performanceResult.window}
              </div>
              <div>
                <strong>Top Queries:</strong> {performanceResult.top}
              </div>
              <div>
                <strong>Latency Threshold:</strong> {performanceResult.warnThresholdMs}ms
              </div>
              <div>
                <strong>Memory Threshold:</strong> {(performanceResult.memoryThresholdBytes / 1024 / 1024).toFixed(1)}MB
              </div>
              <div>
                <strong>Generated:</strong> {new Date(performanceResult.generatedAt).toLocaleString()}
              </div>
            </div>
            
            {performanceResult.rows.length > 0 ? (
              <div>
                <h3 style={{ margin: '0 0 15px 0', color: '#172B4D' }}>
                  Slow Queries Found ({performanceResult.rows.length})
                </h3>
                {performanceResult.rows.map((row, index) => (
                  <div key={index} style={{ 
                    marginBottom: '20px', 
                    padding: '15px', 
                    backgroundColor: '#FFF2CC', 
                    border: '1px solid #FFD700',
                    borderRadius: '4px'
                  }}>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '10px', marginBottom: '15px' }}>
                      <div><strong>Rank:</strong> {row.rank}</div>
                      <div><strong>Type:</strong> {row.stmtType}</div>
                      <div><strong>Executions:</strong> {row.execCount}</div>
                      <div><strong>Avg Latency:</strong> {row.avgLatencyMs.toFixed(2)}ms</div>
                      <div><strong>Max Latency:</strong> {row.maxLatencyMs.toFixed(2)}ms</div>
                      <div><strong>Avg Memory:</strong> {row.avgMemMB.toFixed(2)}MB</div>
                      <div><strong>Max Memory:</strong> {row.maxMemMB.toFixed(2)}MB</div>
                      <div><strong>Plan Cache:</strong> {row.planInCache ? 'Yes' : 'No'}</div>
                    </div>
                    
                    <div style={{ marginBottom: '10px' }}>
                      <strong>SQL Query:</strong>
                      <pre style={{ 
                        backgroundColor: '#F8F9FA', 
                        padding: '10px', 
                        borderRadius: '4px', 
                        fontSize: '12px',
                        overflow: 'auto',
                        marginTop: '5px'
                      }}>
                        {row.digestText}
                      </pre>
                    </div>
                    
                    <details style={{ marginTop: '10px' }}>
                      <summary style={{ cursor: 'pointer', fontWeight: 'bold', color: '#0052CC' }}>
                        View Execution Plan
                      </summary>
                      <pre style={{ 
                        backgroundColor: '#F8F9FA', 
                        padding: '10px', 
                        borderRadius: '4px', 
                        fontSize: '11px',
                        overflow: 'auto',
                        marginTop: '10px',
                        whiteSpace: 'pre-wrap'
                      }}>
                        {row.plan}
                      </pre>
                    </details>
                  </div>
                ))}
              </div>
            ) : (
              <div style={{ 
                padding: '20px', 
                textAlign: 'center', 
                color: '#36B37E',
                backgroundColor: '#E8F5E8',
                borderRadius: '4px'
              }}>
                <strong>✅ No slow queries found!</strong><br />
                All queries are performing within the specified thresholds.
              </div>
            )}
          </div>
        </div>
      )}

      {/* Error Display */}
      {error && (
        <div style={{
          padding: '15px',
          backgroundColor: '#FFEBEE',
          border: '1px solid #FFCDD2',
          borderRadius: '4px',
          color: '#C62828',
          marginBottom: '20px'
        }}>
          <strong>Error:</strong> {error}
        </div>
      )}

      {/* Info Section */}
      <div style={{ padding: '20px', backgroundColor: '#F4F5F7', borderRadius: '8px' }}>
        <h3 style={{ color: '#172B4D', marginBottom: '15px' }}>How it works:</h3>
        <ul style={{ color: '#6B778C', lineHeight: '1.6' }}>
          <li><strong>Non-Cached Query:</strong> Executes a fresh query with 1-second sleep every time</li>
          <li><strong>Cached Query:</strong> Uses global cache - first execution takes time, subsequent calls are instant</li>
          <li><strong>Add User & Order:</strong> Uses <code>executeWithCacheContext</code> to automatically clear cache after operations</li>
          <li><strong>Cache Management:</strong> Clear cache manually or run performance analysis</li>
        </ul>
      </div>
    </div>
  );
};

export default App;
