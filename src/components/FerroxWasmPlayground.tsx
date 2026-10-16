import React, { useState, useRef, useEffect } from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';

interface FerroxWasmPlaygroundProps {
  initialTab?: 'trading' | 'datagrid' | 'form' | 'explorer';
  height?: string;
  title?: string;
}

const WasmPlaygroundInner: React.FC<FerroxWasmPlaygroundProps> = ({
  initialTab = 'trading',
  height = '780px',
  title = 'Ferrox Front • WebAssembly Live Trading Desk',
}) => {
  const [activeTab, setActiveTab] = useState<'trading' | 'datagrid' | 'form' | 'explorer'>(initialTab);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [key, setKey] = useState(0);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const baseUrl = '/wasm/admin-dashboard/index.html';
  const iframeSrc = `${baseUrl}#${activeTab}`;

  const switchTab = (tab: 'trading' | 'datagrid' | 'form' | 'explorer') => {
    setActiveTab(tab);
    if (iframeRef.current && iframeRef.current.contentWindow) {
      try {
        iframeRef.current.contentWindow.location.hash = `#${tab}`;
        iframeRef.current.contentWindow.postMessage(`ferrox-set-tab:${tab}`, '*');
      } catch {
        setKey((prev) => prev + 1);
      }
    }
  };

  const handleReload = () => {
    setIsLoading(true);
    setKey((prev) => prev + 1);
  };

  const toggleFullscreen = () => {
    if (!containerRef.current) return;
    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen().then(() => {
        setIsFullscreen(true);
      }).catch((err) => {
        console.error('Error attempting to enable fullscreen:', err);
      });
    } else {
      document.exitFullscreen().then(() => {
        setIsFullscreen(false);
      }).catch((err) => {
        console.error('Error attempting to exit fullscreen:', err);
      });
    }
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
    };
  }, []);

  useEffect(() => {
    const handleMessage = (e: MessageEvent) => {
      if (typeof e.data === 'string' && e.data.startsWith('ferrox-tab:')) {
        const tab = e.data.replace('ferrox-tab:', '') as 'trading' | 'datagrid' | 'form' | 'explorer';
        if (['trading', 'datagrid', 'form', 'explorer'].includes(tab)) {
          setActiveTab(tab);
        }
      }
    };
    window.addEventListener('message', handleMessage);
    return () => {
      window.removeEventListener('message', handleMessage);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        margin: isFullscreen ? '0' : '1.5rem 0',
        borderRadius: isFullscreen ? '0' : '16px',
        overflow: 'hidden',
        border: isFullscreen ? 'none' : '1px solid rgba(148, 163, 184, 0.15)',
        background: '#090d16',
        boxShadow: '0 20px 40px -15px rgba(0, 0, 0, 0.5)',
        display: 'flex',
        flexDirection: 'column',
        height: isFullscreen ? '100vh' : 'auto',
        fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
      }}
    >
      {/* Playground Header Bar */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '10px',
          padding: '12px 18px',
          background: 'rgba(15, 23, 42, 0.95)',
          borderBottom: '1px solid rgba(148, 163, 184, 0.15)',
          backdropFilter: 'blur(12px)',
        }}
      >
        {/* Title and Telemetry */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div
            style={{
              width: '10px',
              height: '10px',
              borderRadius: '50%',
              background: '#10b981',
              boxShadow: '0 0 10px #10b981',
            }}
          />
          <span style={{ fontWeight: 700, fontSize: '0.9rem', color: '#f8fafc', letterSpacing: '0.02em' }}>
            {title}
          </span>
          <span
            style={{
              fontSize: '0.72rem',
              fontWeight: 600,
              padding: '2px 8px',
              borderRadius: '999px',
              background: 'rgba(99, 102, 241, 0.18)',
              color: '#a5b4fc',
              border: '1px solid rgba(99, 102, 241, 0.3)',
            }}
          >
            Pure Rust Wasm
          </span>
        </div>

        {/* Tab Controls */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
            background: 'rgba(2, 6, 23, 0.6)',
            padding: '3px',
            borderRadius: '10px',
            border: '1px solid rgba(148, 163, 184, 0.12)',
          }}
        >
          <button
            onClick={() => switchTab('trading')}
            type="button"
            style={{
              padding: '5px 12px',
              fontSize: '0.78rem',
              fontWeight: activeTab === 'trading' ? 700 : 500,
              borderRadius: '7px',
              border: 'none',
              cursor: 'pointer',
              background: activeTab === 'trading' ? '#6366f1' : 'transparent',
              color: activeTab === 'trading' ? '#ffffff' : '#94a3b8',
              transition: 'all 0.2s ease',
            }}
          >
            ⚡ Trading Desk Pro
          </button>
          <button
            onClick={() => switchTab('datagrid')}
            type="button"
            style={{
              padding: '5px 12px',
              fontSize: '0.78rem',
              fontWeight: activeTab === 'datagrid' ? 700 : 500,
              borderRadius: '7px',
              border: 'none',
              cursor: 'pointer',
              background: activeTab === 'datagrid' ? '#6366f1' : 'transparent',
              color: activeTab === 'datagrid' ? '#ffffff' : '#94a3b8',
              transition: 'all 0.2s ease',
            }}
          >
            📊 DataGrid (1M Rows)
          </button>
          <button
            onClick={() => switchTab('form')}
            type="button"
            style={{
              padding: '5px 12px',
              fontSize: '0.78rem',
              fontWeight: activeTab === 'form' ? 700 : 500,
              borderRadius: '7px',
              border: 'none',
              cursor: 'pointer',
              background: activeTab === 'form' ? '#6366f1' : 'transparent',
              color: activeTab === 'form' ? '#ffffff' : '#94a3b8',
              transition: 'all 0.2s ease',
            }}
          >
            📝 Form Wizard
          </button>
          <button
            onClick={() => switchTab('explorer')}
            type="button"
            style={{
              padding: '5px 12px',
              fontSize: '0.78rem',
              fontWeight: activeTab === 'explorer' ? 700 : 500,
              borderRadius: '7px',
              border: 'none',
              cursor: 'pointer',
              background: activeTab === 'explorer' ? '#6366f1' : 'transparent',
              color: activeTab === 'explorer' ? '#ffffff' : '#94a3b8',
              transition: 'all 0.2s ease',
            }}
          >
            📁 Overlays (⌘K)
          </button>
        </div>

        {/* Action Buttons */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <button
            onClick={handleReload}
            title="Reload WebAssembly Instance"
            type="button"
            style={{
              background: 'rgba(30, 41, 59, 0.7)',
              border: '1px solid rgba(148, 163, 184, 0.2)',
              color: '#94a3b8',
              borderRadius: '8px',
              padding: '5px 10px',
              fontSize: '0.78rem',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
            }}
          >
            🔄 Reload
          </button>
          <button
            onClick={toggleFullscreen}
            title={isFullscreen ? 'Exit Fullscreen' : 'Fullscreen'}
            type="button"
            style={{
              background: 'rgba(30, 41, 59, 0.7)',
              border: '1px solid rgba(148, 163, 184, 0.2)',
              color: '#94a3b8',
              borderRadius: '8px',
              padding: '5px 10px',
              fontSize: '0.78rem',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
            }}
          >
            {isFullscreen ? '⤢ Exit' : '⤢ Fullscreen'}
          </button>
        </div>
      </div>

      {/* Frame Container */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          height: isFullscreen ? 'calc(100vh - 53px)' : height,
          background: '#020617',
        }}
      >
        {isLoading && (
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              background: '#090d16',
              zIndex: 10,
              gap: '12px',
            }}
          >
            <div
              style={{
                width: '36px',
                height: '36px',
                border: '3px solid rgba(99, 102, 241, 0.2)',
                borderTopColor: '#6366f1',
                borderRadius: '50%',
                animation: 'ferrox-spin 0.8s linear infinite',
              }}
            />
            <span style={{ fontSize: '0.85rem', color: '#94a3b8', fontWeight: 500 }}>
              Loading Wasm Runtime & ferrox-engine...
            </span>
            <style>{`
              @keyframes ferrox-spin {
                to { transform: rotate(360deg); }
              }
            `}</style>
          </div>
        )}
        <iframe
          key={key}
          ref={iframeRef}
          src={iframeSrc}
          title={title}
          onLoad={() => setIsLoading(false)}
          style={{
            width: '100%',
            height: '100%',
            border: 'none',
            display: 'block',
          }}
        />
      </div>

      {/* Playground Status Footer */}
      <div
        style={{
          padding: '8px 18px',
          background: '#060911',
          borderTop: '1px solid rgba(148, 163, 184, 0.1)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          fontSize: '0.72rem',
          color: '#64748b',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <span>Engine: <strong style={{ color: '#38bdf8' }}>ferrox-engine v0.1.0</strong> (In-Memory BTreeMap)</span>
          <span>Latency: <strong style={{ color: '#10b981' }}>&lt; 1.8 μs</strong></span>
          <span>Target: <strong style={{ color: '#cbd5e1' }}>wasm32-unknown-unknown</strong></span>
        </div>
        <div>
          <span>Architecture: <strong style={{ color: '#a855f7' }}>Zero JavaScript / 100% Rust Signals</strong></span>
        </div>
      </div>
    </div>
  );
};

export default function FerroxWasmPlayground(props: FerroxWasmPlaygroundProps) {
  return (
    <BrowserOnly fallback={<div style={{ padding: '2rem', textAlign: 'center', color: '#64748b' }}>Loading WebAssembly Playground...</div>}>
      {() => <WasmPlaygroundInner {...props} />}
    </BrowserOnly>
  );
}
