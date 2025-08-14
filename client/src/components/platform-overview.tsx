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

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Store Column */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
            <div className="text-center mb-8">
              <div className="flex items-center justify-center mb-4">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                  <Database className="w-6 h-6 text-gray-600" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Store</h3>
              <div className="h-1 w-20 bg-gray-300 rounded-full mx-auto"></div>
            </div>
            
            <div className="space-y-6">
              <div className="text-center">
                <h4 className="font-medium text-gray-900 mb-2">Any storage</h4>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-4">
                <p className="text-sm font-medium text-gray-700 mb-2">Open table formats</p>
                <p className="text-xs text-gray-500">Iceberg, Delta, Hudi</p>
              </div>

              <div className="space-y-4">
                {/* Cloud Providers */}
                <div className="grid grid-cols-1 gap-3">
                  <div className="bg-orange-50 rounded-lg p-3 flex items-center justify-center">
                    <span className="text-sm font-medium text-orange-600">AWS</span>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-3 flex items-center justify-center">
                    <span className="text-sm font-medium text-blue-600">Azure</span>
                  </div>
                  <div className="bg-red-50 rounded-lg p-3 flex items-center justify-center">
                    <span className="text-sm font-medium text-red-600">Google Cloud</span>
                  </div>
                </div>
                
                <div className="bg-gray-100 rounded-lg p-3 text-center">
                  <span className="text-sm font-medium text-gray-600">ON-PREMISE</span>
                </div>
              </div>
            </div>
          </div>

          {/* Build/Run/Operate Column */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
            <div className="text-center mb-8">
              <div className="flex items-center justify-center space-x-4 mb-4">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                </div>
              </div>
              <div className="flex justify-center space-x-8 mb-4">
                <h3 className="text-lg font-semibold text-blue-600">Build</h3>
                <h3 className="text-lg font-semibold text-blue-600">Run</h3>
                <h3 className="text-lg font-semibold text-blue-600">Operate</h3>
              </div>
              <div className="h-1 w-40 bg-blue-300 rounded-full mx-auto"></div>
            </div>
            
            <div className="space-y-6">
              <div className="text-center">
                <h4 className="font-medium text-blue-700 mb-2">Any engine, compute or tool</h4>
              </div>
              
              <div className="bg-blue-50 rounded-lg p-4">
                <p className="text-sm font-medium text-blue-700 mb-2">Technical data catalog</p>
                <p className="text-xs text-blue-600">Physical metadata</p>
              </div>

              <div className="space-y-3">
                {/* Integration Partners */}
                <div className="grid grid-cols-2 gap-2">
                  <div className="bg-gray-50 rounded-lg p-2 text-center">
                    <span className="text-xs font-medium text-gray-600">Spark</span>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-2 text-center">
                    <span className="text-xs font-medium text-gray-600">Databricks</span>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-2 text-center">
                    <span className="text-xs font-medium text-gray-600">Snowflake</span>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-2 text-center">
                    <span className="text-xs font-medium text-gray-600">dbt</span>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-2 text-center">
                    <span className="text-xs font-medium text-gray-600">Tableau</span>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-2 text-center">
                    <span className="text-xs font-medium text-gray-600">Power BI</span>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-2 text-center">
                    <span className="text-xs font-medium text-gray-600">Looker</span>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-2 text-center">
                    <span className="text-xs font-medium text-gray-600">IBM</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Trust/Comply/Consume Column */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
            <div className="text-center mb-8">
              <div className="flex items-center justify-center space-x-4 mb-4">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
              </div>
              <div className="flex justify-center space-x-6 mb-4">
                <h3 className="text-lg font-semibold text-green-600">Trust</h3>
                <h3 className="text-lg font-semibold text-green-600">Comply</h3>
                <h3 className="text-lg font-semibold text-green-600">Consume</h3>
              </div>
              <div className="h-1 w-40 bg-green-300 rounded-full mx-auto"></div>
            </div>
            
            <div className="space-y-6">
              <div className="text-center">
                <h4 className="font-medium text-green-700 mb-2">With unified governance for data and AI</h4>
              </div>
              
              <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                <p className="text-sm font-medium text-green-700 mb-2">Semantic Graph</p>
                <p className="text-xs text-green-600">Physical, logical, conceptual, semantic, systems, policy...</p>
              </div>

              {/* Governance Circle */}
              <div className="relative">
                <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-6">
                  <div className="relative">
                    {/* Outer labels */}
                    <div className="absolute -top-2 left-4 text-xs font-medium text-blue-600 bg-blue-100 px-2 py-1 rounded">
                      Data quality and observability
                    </div>
                    <div className="absolute top-4 -right-2 text-xs font-medium text-blue-600 bg-blue-100 px-2 py-1 rounded">
                      Policy setting
                    </div>
                    <div className="absolute -bottom-2 right-4 text-xs font-medium text-green-600 bg-green-100 px-2 py-1 rounded">
                      Data products and marketplace
                    </div>
                    <div className="absolute bottom-4 -left-2 text-xs font-medium text-green-600 bg-green-100 px-2 py-1 rounded">
                      Policy enforcement
                    </div>
                    
                    {/* Center circle */}
                    <div className="bg-white rounded-full p-6 mx-auto w-32 h-32 flex items-center justify-center border-4 border-green-200 shadow-lg">
                      <div className="text-center">
                        <p className="text-xs font-semibold text-gray-800 mb-1">AI-automated</p>
                        <p className="text-xs font-semibold text-gray-800 mb-1">and collaborative</p>
                        <p className="text-xs font-semibold text-gray-800">stewardship</p>
                      </div>
                    </div>
                    
                    {/* Corner labels */}
                    <div className="absolute top-8 left-0 text-xs text-gray-600">Data producers</div>
                    <div className="absolute top-8 right-0 text-xs text-gray-600">Data consumers</div>
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