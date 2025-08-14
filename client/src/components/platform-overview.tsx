import { Database, Cog, Shield, Users, BarChart3, GitBranch } from "lucide-react";

const PlatformOverview = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Data Katalyst Platform Overview
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive data management across storage, processing, and governance with unified control
          </p>
        </div>

        <div className="grid gap-6 mb-12" style={{ gridTemplateColumns: '1fr 2fr 4fr' }}>
          {/* Store Column */}
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
            <div className="text-center mb-6">
              <div className="flex items-center justify-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                  <Database className="w-6 h-6 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">Store</h3>
              <div className="h-1 w-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mx-auto"></div>
            </div>
            
            <div className="space-y-6">
              <div className="text-center">
                <h4 className="font-medium text-gray-900 mb-2">Any storage</h4>
              </div>
              
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-4 border border-blue-200">
                <p className="text-sm font-medium bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">Open table formats</p>
                <p className="text-xs text-blue-600">Iceberg, Delta, Hudi</p>
              </div>

              <div className="space-y-3">
                {/* Cloud Providers */}
                <div className="grid grid-cols-1 gap-2">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg p-2 flex items-center justify-center">
                    <span className="text-sm font-medium">AWS</span>
                  </div>
                  <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg p-2 flex items-center justify-center">
                    <span className="text-sm font-medium">Azure</span>
                  </div>
                  <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg p-2 flex items-center justify-center">
                    <span className="text-sm font-medium">Google Cloud</span>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg p-2 text-center">
                  <span className="text-sm font-medium">ON-PREMISE</span>
                </div>
              </div>
            </div>
          </div>

          {/* Build/Run/Operate Column */}
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
            <div className="text-center mb-6">
              <div className="flex items-center justify-center space-x-4 mb-4">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
                  <div className="w-3 h-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
                  <div className="w-3 h-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
                </div>
              </div>
              <div className="flex justify-center space-x-6 mb-4">
                <h3 className="text-lg font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Build</h3>
                <h3 className="text-lg font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Run</h3>
                <h3 className="text-lg font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Operate</h3>
              </div>
              <div className="h-1 w-40 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mx-auto"></div>
            </div>
            
            <div className="space-y-6">
              <div className="text-center">
                <h4 className="font-medium text-gray-700 mb-2">Any engine, compute or tool</h4>
              </div>
              
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-4 border border-blue-200">
                <p className="text-sm font-medium bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">Technical data catalog</p>
                <p className="text-xs text-blue-600">Physical metadata</p>
              </div>

              <div className="space-y-3">
                {/* Integration Partners */}
                <div className="grid grid-cols-2 gap-2">
                  <div className="bg-gradient-to-r from-blue-100 to-purple-100 border border-blue-200 rounded-lg p-2 text-center">
                    <span className="text-xs font-medium text-blue-700">Spark</span>
                  </div>
                  <div className="bg-gradient-to-r from-blue-100 to-purple-100 border border-blue-200 rounded-lg p-2 text-center">
                    <span className="text-xs font-medium text-blue-700">Databricks</span>
                  </div>
                  <div className="bg-gradient-to-r from-blue-100 to-purple-100 border border-blue-200 rounded-lg p-2 text-center">
                    <span className="text-xs font-medium text-blue-700">Snowflake</span>
                  </div>
                  <div className="bg-gradient-to-r from-blue-100 to-purple-100 border border-blue-200 rounded-lg p-2 text-center">
                    <span className="text-xs font-medium text-blue-700">dbt</span>
                  </div>
                  <div className="bg-gradient-to-r from-blue-100 to-purple-100 border border-blue-200 rounded-lg p-2 text-center">
                    <span className="text-xs font-medium text-blue-700">Tableau</span>
                  </div>
                  <div className="bg-gradient-to-r from-blue-100 to-purple-100 border border-blue-200 rounded-lg p-2 text-center">
                    <span className="text-xs font-medium text-blue-700">Power BI</span>
                  </div>
                  <div className="bg-gradient-to-r from-blue-100 to-purple-100 border border-blue-200 rounded-lg p-2 text-center">
                    <span className="text-xs font-medium text-blue-700">Looker</span>
                  </div>
                  <div className="bg-gradient-to-r from-blue-100 to-purple-100 border border-blue-200 rounded-lg p-2 text-center">
                    <span className="text-xs font-medium text-blue-700">IBM</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Trust/Comply/Consume Column */}
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
            <div className="text-center mb-6">
              <div className="flex items-center justify-center space-x-4 mb-4">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
                  <div className="w-3 h-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
                  <div className="w-3 h-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
                </div>
              </div>
              <div className="flex justify-center space-x-4 mb-4">
                <h3 className="text-lg font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Trust</h3>
                <h3 className="text-lg font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Comply</h3>
                <h3 className="text-lg font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Consume</h3>
              </div>
              <div className="h-1 w-40 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mx-auto"></div>
            </div>
            
            <div className="space-y-6">
              <div className="text-center">
                <h4 className="font-medium text-gray-700 mb-2">With unified governance for data and AI</h4>
              </div>
              
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-4 border border-blue-200">
                <p className="text-sm font-medium bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">Semantic Graph</p>
                <p className="text-xs text-blue-600">Physical, logical, conceptual, semantic, systems, policy...</p>
              </div>

              {/* Governance Circle */}
              <div className="relative">
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-8">
                  <div className="relative w-80 h-80 mx-auto">
                    {/* Continuous rotating arrow circle */}
                    <div className="absolute inset-0" style={{ animation: 'spin 8s linear infinite' }}>
                      <svg width="320" height="320" viewBox="0 0 320 320" className="w-full h-full">
                        <defs>
                          <linearGradient id="blueGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#3b82f6" />
                            <stop offset="50%" stopColor="#8b5cf6" />
                            <stop offset="100%" stopColor="#06b6d4" />
                          </linearGradient>
                        </defs>
                        
                        {/* Single circle with integrated white arrow breaks - radius 120 to match center positioning */}
                        {/* Circle segments with gaps for arrows */}
                        <path d="M 160 40 A 120 120 0 0 1 266 94" fill="none" stroke="url(#blueGradient)" strokeWidth="8"/>
                        <path d="M 274 106 A 120 120 0 0 1 280 160" fill="none" stroke="url(#blueGradient)" strokeWidth="8"/>
                        <path d="M 280 160 A 120 120 0 0 1 226 274" fill="none" stroke="url(#blueGradient)" strokeWidth="8"/>
                        <path d="M 214 286 A 120 120 0 0 1 160 280" fill="none" stroke="url(#blueGradient)" strokeWidth="8"/>
                        <path d="M 160 280 A 120 120 0 0 1 54 226" fill="none" stroke="url(#blueGradient)" strokeWidth="8"/>
                        <path d="M 46 214 A 120 120 0 0 1 40 160" fill="none" stroke="url(#blueGradient)" strokeWidth="8"/>
                        <path d="M 40 160 A 120 120 0 0 1 94 54" fill="none" stroke="url(#blueGradient)" strokeWidth="8"/>
                        <path d="M 106 46 A 120 120 0 0 1 160 40" fill="none" stroke="url(#blueGradient)" strokeWidth="8"/>
                        
                        {/* White triangular arrows positioned at gaps in the circle - clockwise direction */}
                        <g fill="white" stroke="url(#blueGradient)" strokeWidth="2">
                          {/* Top arrow - pointing right (clockwise) */}
                          <polygon points="270,100 280,90 280,110" />
                          {/* Right arrow - pointing down (clockwise) */}
                          <polygon points="230,280 220,270 240,270" />
                          {/* Bottom arrow - pointing left (clockwise) */}
                          <polygon points="50,220 40,210 40,230" />
                          {/* Left arrow - pointing up (clockwise) */}
                          <polygon points="100,40 110,50 90,50" />
                        </g>
                      </svg>
                    </div>
                    
                    {/* Static labels positioned around the circle */}
                    {/* Top - Data quality and observability */}
                    <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-xl shadow-lg text-sm font-medium whitespace-nowrap">
                        Data quality and observability
                      </div>
                    </div>
                    
                    {/* Right - Policy setting */}
                    <div className="absolute top-1/2 -right-6 transform -translate-y-1/2">
                      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-xl shadow-lg text-sm font-medium whitespace-nowrap">
                        Policy setting
                      </div>
                    </div>
                    
                    {/* Bottom - Data products and marketplace */}
                    <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-xl shadow-lg text-sm font-medium whitespace-nowrap">
                        Data products and marketplace
                      </div>
                    </div>
                    
                    {/* Left - Policy enforcement */}
                    <div className="absolute top-1/2 -left-6 transform -translate-y-1/2">
                      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-xl shadow-lg text-sm font-medium whitespace-nowrap">
                        Policy enforcement<br />
                        <span className="text-xs opacity-90">Business context and semantics</span>
                      </div>
                    </div>
                    
                    {/* Center circle */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <div className="bg-white rounded-full w-40 h-40 flex items-center justify-center shadow-xl border-4 border-blue-300">
                        <div className="text-center">
                          <p className="text-lg font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-1">AI-automated</p>
                          <p className="text-lg font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-1">and collaborative</p>
                          <p className="text-lg font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">stewardship</p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Corner labels */}
                    <div className="absolute top-8 left-4 text-sm font-medium text-blue-700">Data producers</div>
                    <div className="absolute top-8 right-4 text-sm font-medium text-blue-700">Data consumers</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom integration note */}
        <div className="text-center">
          <p className="text-sm text-gray-500">
            Seamless integration with your existing data infrastructure and tools
          </p>
        </div>
      </div>
    </section>
  );
};

export default PlatformOverview;