var assert = require('assert');
var xrGrpc = require('../lib/index.js');

var xrAddress = '11.1.1.254';
var xrPort = 57500;
var xrMetadata = {
	username: 'vagrant',
	password: 'vagrant'
};

function main() {
	// Utility Method Testing
	testSetup();
	testToString();
	testGetAddress();
	testSetMetadata();
	testCreateMetadata();
	// Message Method Testing
	testMsgConfigArgs();
	testMsgConfigGetArgs();
	testMsgCliConfigArgs();
	testMsgCommitReplaceArgs();
	testMsgCommitArgs();
	testMsgDiscardChangesArgs();
	testMsgGetOperArgs();
	testMsgShowCmdArgs();
}

function defaultInstance() {
	return new xrGrpc(xrAddress, xrPort, null, xrMetadata, null);
}

function testSetup() {
	describe('index.js', function() {
		describe('#xrGrpc()', function() {
			it('should create a new instance', function() {
				var testGrpc = defaultInstance();
				assert(xrAddress, testGrpc.params.address);
				assert(xrPort, testGrpc.params.port);
				assert(!undefined, testGrpc.params.credentials);
				assert(xrMetadata, testGrpc.params.metadata);
				assert({}, testGrpc.params.options);
				assert(!undefined, testGrpc.xrGrpcClient);
				assert(!undefined, testGrpc.xrGrpcCliClient);
			});
		});
	});
}

function testToString() {
	describe('index.js', function() {
		describe('#toString()', function() {
			it('should return stringified parameters and clients.', function() {
				console.log('Not yet implemented.');
				assert(true, true);
			});
		});
	});
}

function testGetAddress() {
	describe('index.js', function() {
		describe('#getAddress()', function() {
			it('should return the address param for clients.', function() {
				var testGrpc = defaultInstance();
				assert(xrAddress + ':' + xrPort, testGrpc.getAddress());
			});
		});
	});
}

function testSetMetadata() {
	describe('index.js', function() {
		describe('#setMetadata()', function() {
			it('should change metadata.', function() {
				var testGrpc = defaultInstance();
				assert(xrMetadata.username, testGrpc.params.metadata.get('username'));
				assert(xrMetadata.password, testGrpc.params.metadata.get('password'));
				var newMetadata = {
					username: 'iam',
					password: 'datnewnew'
				};
				testGrpc.setMetadata(newMetadata);
				assert(newMetadata.username, testGrpc.params.metadata.get('username'));
				assert(newMetadata.password, testGrpc.params.metadata.get('password'));
			});
		});
	});
}

function testCreateMetadata() {
	describe('index.js', function() {
		describe('#createMetadata()', function() {
			it('should create and return the metadata object.', function() {
				var testGrpc = defaultInstance();
				var metaMeta = testGrpc.createMetadata(xrMetadata);
				assert(xrMetadata.username, metaMeta.get('username'));
				assert(xrMetadata.password, metaMeta.get('password'));
			});
		});
	});
}

function testMsgConfigArgs() {
	describe('index.js', function() {
		describe('#msgs.ConfigArgs()', function() {
			it('should return a ConfigArgs object.', function() {
				var testParams = {
					reqId: 0,
					yangJSON: 'test'
				};
				var testGrpc = defaultInstance();
				var testArg = testGrpc.msgs.ConfigArgs(testParams.reqId, testParams.yangJSON);
				var index = 0;
				for (var key in testParams) {
					assert(testParams[key], testArg.array[index]);
					index++;
				}
			});
		});
	});
}

function testMsgConfigGetArgs() {
	describe('index.js', function() {
		describe('#msgs.ConfigGetArgs()', function() {
			it('should return a ConfigGetArgs object.', function() {
				var testParams = {
					reqId: 0,
					yangPathJSON: 'test'
				};
				var testGrpc = defaultInstance();
				var testArg = testGrpc.msgs.ConfigGetArgs(testParams.reqId, testParams.yangPathJSON);
				var index = 0;
				for (var key in testParams) {
					assert(testParams[key], testArg.array[index]);
					index++;
				}
			});
		});
	});
}

function testMsgCliConfigArgs() {
	describe('index.js', function() {
		describe('#msgs.CliConfigArgs()', function() {
			it('should return a CliConfigArgs object.', function() {
				var testParams = {
					reqId: 0,
					cli: 'test'
				};
				var testGrpc = defaultInstance();
				var testArg = testGrpc.msgs.CliConfigArgs(testParams.reqId, testParams.cli);
				var index = 0;
				for (var key in testParams) {
					assert(testParams[key], testArg.array[index]);
					index++;
				}
			});
		});
	});
}

function testMsgCommitReplaceArgs() {
	describe('index.js', function() {
		describe('#msgs.CommitReplaceArgs()', function() {
			it('should return a CommitReplaceArgs object.', function() {
				var testParams = {
					reqId: 0,
					cli: 'test',
					yangJSON: 'test1'
				};
				var testGrpc = defaultInstance();
				var testArg = testGrpc.msgs.CommitReplaceArgs(testParams.reqId, testParams.cli, testParams.yangJSON);
				var index = 0;
				for (var key in testParams) {
					assert(testParams[key], testArg.array[index]);
					index++;
				}
			});
		});
	});
}

function testMsgCommitArgs() {
	describe('index.js', function() {
		describe('#msgs.CommitArgs()', function() {
			it('should return a CommitArgs object.', function() {
				var testParams = {
					commitMsg: 'test',
					reqId: 0
				};
				var testGrpc = defaultInstance();
				var testArg = testGrpc.msgs.CommitArgs(testParams.reqId, testParams.commitMsg);
				var index = 0;
				for (var key in testParams) {
					assert(testParams[key], testArg.array[index]);
					index++;
				}
			});
		});
	});
}

function testMsgDiscardChangesArgs() {
	describe('index.js', function() {
		describe('#msgs.DiscardChangesArgs()', function() {
			it('should return a DiscardChangesArgs object.', function() {
				var testParams = {
					reqId: 0,
				};
				var testGrpc = defaultInstance();
				var testArg = testGrpc.msgs.DiscardChangesArgs(testParams.reqId);
				var index = 0;
				for (var key in testParams) {
					assert(testParams[key], testArg.array[index]);
					index++;
				}
			});
		});
	});
}

function testMsgGetOperArgs() {
	describe('index.js', function() {
		describe('#msgs.GetOperArgs()', function() {
			it('should return a GetOperArgs object.', function() {
				var testParams = {
					reqId: 0,
					yangPathJSON: 'test'
				};
				var testGrpc = defaultInstance();
				var testArg = testGrpc.msgs.GetOperArgs(testParams.reqId, testParams.yangPathJSON);
				var index = 0;
				for (var key in testParams) {
					assert(testParams[key], testArg.array[index]);
					index++;
				}
			});
		});
	});
}

function testMsgShowCmdArgs() {
	describe('index.js', function() {
		describe('#msgs.ShowCmdArgs()', function() {
			it('should return a ShowCmdArgs object.', function() {
				var testParams = {
					reqId: 0,
					cli: 'test'
				};
				var testGrpc = defaultInstance();
				var testArg = testGrpc.msgs.ShowCmdArgs(testParams.reqId, testParams.cli);
				var index = 0;
				for (var key in testParams) {
					assert(testParams[key], testArg.array[index]);
					index++;
				}
			});
		});
	});
}



main();