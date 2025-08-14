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
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6">
                  <div className="relative">
                    {/* Rotating outer circle */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-48 h-48 border-2 border-dashed border-blue-300 rounded-full animate-spin-slow opacity-30"></div>
                    </div>
                    
                    {/* Outer labels with arrow shapes and transitions */}
                    {/* Top label - Data quality and observability */}
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 transition-all duration-300 hover:scale-105">
                      <div className="relative">
                        <div className="text-xs font-medium text-white bg-gradient-to-r from-blue-600 to-purple-600 px-3 py-2 rounded-lg shadow-lg whitespace-nowrap">
                          Data quality and observability
                        </div>
                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-blue-600"></div>
                      </div>
                    </div>
                    
                    {/* Right label - Policy setting */}
                    <div className="absolute top-1/2 -right-4 transform -translate-y-1/2 transition-all duration-300 hover:scale-105">
                      <div className="relative">
                        <div className="text-xs font-medium text-white bg-gradient-to-r from-blue-600 to-purple-600 px-3 py-2 rounded-lg shadow-lg whitespace-nowrap">
                          Policy setting
                        </div>
                        <div className="absolute top-1/2 right-full transform -translate-y-1/2 w-0 h-0 border-t-4 border-b-4 border-r-4 border-transparent border-r-blue-600"></div>
                      </div>
                    </div>
                    
                    {/* Bottom label - Data products and marketplace */}
                    <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 transition-all duration-300 hover:scale-105">
                      <div className="relative">
                        <div className="text-xs font-medium text-white bg-gradient-to-r from-blue-600 to-purple-600 px-3 py-2 rounded-lg shadow-lg whitespace-nowrap">
                          Data products and marketplace
                        </div>
                        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-b-4 border-transparent border-b-blue-600"></div>
                      </div>
                    </div>
                    
                    {/* Left label - Policy enforcement */}
                    <div className="absolute top-1/2 -left-4 transform -translate-y-1/2 transition-all duration-300 hover:scale-105">
                      <div className="relative">
                        <div className="text-xs font-medium text-white bg-gradient-to-r from-blue-600 to-purple-600 px-3 py-2 rounded-lg shadow-lg whitespace-nowrap">
                          Policy enforcement
                          <br />
                          <span className="text-xs opacity-90">Business context and semantics</span>
                        </div>
                        <div className="absolute top-1/2 left-full transform -translate-y-1/2 w-0 h-0 border-t-4 border-b-4 border-l-4 border-transparent border-l-blue-600"></div>
                      </div>
                    </div>
                    
                    {/* Center rotating circle with gradient border */}
                    <div className="relative mx-auto w-40 h-40 flex items-center justify-center">
                      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 animate-spin-slow p-1">
                        <div className="w-full h-full bg-white rounded-full"></div>
                      </div>
                      <div className="relative z-10 text-center bg-white rounded-full w-32 h-32 flex items-center justify-center shadow-lg">
                        <div>
                          <p className="text-sm font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-1">AI-automated</p>
                          <p className="text-sm font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-1">and collaborative</p>
                          <p className="text-sm font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">stewardship</p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Corner labels */}
                    <div className="absolute top-8 left-4 text-sm font-medium text-blue-700 bg-transparent">Data producers</div>
                    <div className="absolute top-8 right-4 text-sm font-medium text-blue-700 bg-transparent">Data consumers</div>
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